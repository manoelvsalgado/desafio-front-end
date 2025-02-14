import { useEffect, useState } from "react";
import { CurrentWeather, Forecast } from "../types/types";

const API_KEY = "0859778bf6364de7854190048250602";

interface WeatherData {
  current: CurrentWeather;
  forecast: Forecast;
}

export const useWeatherData = (cityName: string | undefined) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cityName) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1`
        );
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message);
        }

        setWeatherData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  return { weatherData, loading, error };
};
