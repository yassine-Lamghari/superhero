import os
import requests
import pandas as pd
from datetime import datetime

# Open-Meteo Historical API endpoint
API_URL = "https://archive-api.open-meteo.com/v1/archive"

# Cities and their coordinates
CITIES = {
    "New York": {"lat": 40.7128, "lon": -74.0060},
    "London": {"lat": 51.5074, "lon": -0.1278},
    "Tokyo": {"lat": 35.6895, "lon": 139.6917}
}

START_DATE = "2019-01-01"
END_DATE = "2023-12-31"

DATA_LAKE_DIR = "/app/data_lake"

def fetch_weather_data(city_name, lat, lon):
    print(f"Fetching 5 years of historical weather data for {city_name}...")
    params = {
        "latitude": lat,
        "longitude": lon,
        "start_date": START_DATE,
        "end_date": END_DATE,
        "hourly": "temperature_2m,precipitation"
    }
    
    response = requests.get(API_URL, params=params)
    response.raise_for_status()  # raise exception if invalid response
    
    data = response.json()
    
    # Extract the hourly data
    hourly_data = data.get("hourly", {})
    if not hourly_data:
        print(f"Warning: No hourly data returned for {city_name}")
        return None
        
    df = pd.DataFrame(hourly_data)
    df['city'] = city_name
    
    print(f"Successfully fetched {len(df)} rows for {city_name}.")
    return df

def main():
    # Ensure data lake directory exists
    os.makedirs(DATA_LAKE_DIR, exist_ok=True)
    
    for city_name, coords in CITIES.items():
        try:
            df = fetch_weather_data(city_name, coords["lat"], coords["lon"])
            if df is not None:
                # Save as Parquet file
                file_name = f"{city_name.lower().replace(' ', '_')}_weather.parquet"
                file_path = os.path.join(DATA_LAKE_DIR, file_name)
                
                print(f"Saving data to {file_path}...")
                # Write to parquet, using pyarrow engine
                df.to_parquet(file_path, engine='pyarrow', index=False)
                
        except requests.exceptions.RequestException as e:
            print(f"API Request failed for {city_name}: {e}")
        except Exception as e:
            print(f"An error occurred while processing {city_name}: {e}")

    print("Data extraction complete.")

if __name__ == "__main__":
    main()
