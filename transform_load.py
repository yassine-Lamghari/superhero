import os
import glob
import pandas as pd
from sqlalchemy import create_engine

DATA_LAKE_DIR = "/app/data_lake"

def load_data_from_lake():
    print("Reading Parquet files from Data Lake...")
    # Find all parquet files in the data lake
    parquet_files = glob.glob(os.path.join(DATA_LAKE_DIR, "*.parquet"))
    
    if not parquet_files:
        raise FileNotFoundError("No Parquet files found in the data lake.")
        
    df_list = []
    for file in parquet_files:
        print(f"Reading {file}...")
        df_part = pd.read_parquet(file)
        df_list.append(df_part)
        
    # Concatenate all city data into one massive dataframe
    raw_df = pd.concat(df_list, ignore_index=True)
    print(f"Total rows loaded from Data Lake: {len(raw_df)}")
    return raw_df

def transform_data(df):
    print("Transforming data...")
    # 1. Convert 'time' string to datetime
    df['time'] = pd.to_datetime(df['time'])
    
    # 2. Handle missing values (if any) by filling with 0
    df['precipitation'] = df['precipitation'].fillna(0.0)
    
    # 3. Rename columns to be more readable
    df = df.rename(columns={'temperature_2m': 'temperature_celsius'})
    
    print("Transformation complete.")
    return df

def create_daily_summary(df):
    print("Creating daily aggregations...")
    # Extract date from time
    df['date'] = df['time'].dt.date
    
    # Group by date and city to find min, max, mean temp and total precipitation
    daily_summary = df.groupby(['date', 'city']).agg({
        'temperature_celsius': ['min', 'max', 'mean'],
        'precipitation': 'sum'
    }).reset_index()
    
    # Flatten the MultiIndex columns
    daily_summary.columns = [
        'date', 'city', 'min_temp', 'max_temp', 'avg_temp', 'total_precipitation'
    ]
    
    print(f"Daily summary created. Total rows: {len(daily_summary)}")
    return daily_summary

def load_to_postgres(df, table_name, engine):
    print(f"Loading {len(df)} rows into table: {table_name} (Chunked)...")
    
    # Load DataFrame to PostgreSQL in chunks to avoid memory issues
    # if_exists='replace' will drop the table if it exists and recreate it
    df.to_sql(table_name, engine, if_exists='replace', index=False, chunksize=10000)
    
    print(f"Data successfully loaded into {table_name}.")

def main():
    db_user = os.environ.get('DB_USER', 'superhero_user')
    db_password = os.environ.get('DB_PASSWORD', 'superhero_password')
    db_host = os.environ.get('DB_HOST', 'localhost')
    db_port = os.environ.get('DB_PORT', '5432')
    db_name = os.environ.get('DB_NAME', 'superhero_db')
    
    engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')
    
    try:
        # 1. Extract from Data Lake
        raw_df = load_data_from_lake()
        
        # 2. Transform (Clean)
        clean_hourly_df = transform_data(raw_df)
        
        # 3. Transform (Aggregate)
        daily_summary_df = create_daily_summary(clean_hourly_df)
        
        # 4. Load to Postgres
        # We don't want to save the 'date' column in the hourly table since we have 'time'
        load_to_postgres(clean_hourly_df.drop(columns=['date']), 'weather_hourly', engine)
        load_to_postgres(daily_summary_df, 'weather_daily_summary', engine)
        
        print("Transform and Load completed successfully!")
    except Exception as e:
        print(f"Transform and Load failed: {e}")

if __name__ == "__main__":
    main()
