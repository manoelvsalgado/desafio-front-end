import { createContext, useContext, useState } from "react";
import { WeatherData } from "../types/types";
import { WeatherContextType } from "../types/types";

const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const API_KEY = "0859778bf6364de7854190048250602";

  const getWeather = async (city: string) => {
    try {
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`),
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`),
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("Failed to get data");
      }

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setData({
        current: currentData.current,
        forecast: forecastData.forecast,
      });
    } catch (error) {
      console.error("Failed to get forecast", error);
      setData(null);
    }
  };

  return (
    <WeatherContext.Provider value={{ data, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather deve ser usado dentro de um WeatherProvider");
  }
  return context;
};
