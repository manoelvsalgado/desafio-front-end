import { useState } from "react";

const API_KEY = "0859778bf6364de7854190048250602"; 

const WeatherApp = () => {
  const [city, setCity] = useState(cities[0]);
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Failed to get daata:", error);
    }
  };

  return (
  );
};

export default Api;
