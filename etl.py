import os
import pandas as pd
from sqlalchemy import create_engine

# ============================================================
# EXTRACT
# ============================================================
def extract_csv(file_path):
    print(f"Extracting data from {file_path}...")
    df = pd.read_csv(file_path)
    print(f"Extracted {len(df)} rows.")
    return df

# ============================================================
# TRANSFORM
# ============================================================
def transform_data(df):
    print("Transforming data...")
    # 1. Filter for only 'accepted' applications
    df_transformed = df[df['status'] == 'accepted'].copy()
    
    # 2. Capitalize company names
    df_transformed['company'] = df_transformed['company'].str.upper()
    
    # 3. Calculate a simulated 'signing_bonus' (e.g., 10% of salary)
    df_transformed['signing_bonus'] = df_transformed['salary'] * 0.10
    
    print(f"Transformation complete. {len(df_transformed)} rows remain.")
    return df_transformed

# ============================================================
# LOAD
# ============================================================
def load_to_postgres(df, table_name):
    print(f"Loading data into table: {table_name}...")
    
    # Get DB credentials from environment variables (set in docker-compose.yml)
    db_user = os.environ.get('DB_USER', 'superhero_user')
    db_password = os.environ.get('DB_PASSWORD', 'superhero_password')
    db_host = os.environ.get('DB_HOST', 'localhost') # localhost for testing outside docker
    db_port = os.environ.get('DB_PORT', '5432')
    db_name = os.environ.get('DB_NAME', 'superhero_db')
    
    # Create database connection
    engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')
    
    # Load DataFrame to PostgreSQL
    # if_exists='replace' will drop the table if it exists and recreate it
    # index=False prevents pandas from writing the dataframe index as a column
    df.to_sql(table_name, engine, if_exists='replace', index=False)
    
    print(f"Data successfully loaded into {table_name}.")

# ============================================================
# MAIN
# ============================================================
if __name__ == "__main__":
    file_path = "data/applications.csv"
    table_name = "successful_applications"
    
    try:
        # 1. Extract
        raw_data = extract_csv(file_path)
        
        # 2. Transform
        transformed_data = transform_data(raw_data)
        
        # 3. Load
        load_to_postgres(transformed_data, table_name)
        
        print("ETL Pipeline completed successfully!")
    except Exception as e:
        print(f"ETL Pipeline failed: {e}")