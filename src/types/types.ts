export interface WeatherCondition {
    text: string;
    icon: string;
  }
  
  export interface CurrentWeather {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    condition: WeatherCondition;
  }
  
  export interface ForecastDay {
    astro: {
      sunrise: string;
      sunset: string;
    };
    hour: {
      time: string;
      temp_c: number;
    }[];
  }
  
  export interface Forecast {
    forecastday: ForecastDay[];
  }
  
  export interface WeatherData {
    current: CurrentWeather;
    forecast: Forecast;
  }  

  export interface WeatherContextType {
    data: WeatherData | null;
    getWeather: (city: string) => Promise<void>
  }