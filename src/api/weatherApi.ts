import { ReactNode, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "0859778bf6364de7854190048250602";

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${name}&lang=pt`)
      .then((response) => response.json())
      .then((data) => setTemperature(data.current?.temp_c));
  }, []);

  return <WeatherContext.Provider value={{ temperature }}>{children}</WeatherContext.Provider>;
};

export const useWeather = () => useContext(WeatherContext);
