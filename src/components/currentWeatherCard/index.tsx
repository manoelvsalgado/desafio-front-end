import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
interface WeatherData {
  temp: number | null;
  icon: string;
  text: string;
  maxTemp: number | null;
  minTemp: number | null;
}

const API_KEY = "0859778bf6364de7854190048250602"

const CurrentTemperature: React.FC = () => {
  const { name } = useParams();
  const [weather, setWeather] = useState<WeatherData>({
    temp: null,
    text: "",
    icon: "",
    maxTemp: null,
    minTemp: null,
  });

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&days=1`)
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: data.current?.temp_c ?? null,
          text: data.current?.condition.text ?? "",
          icon: data.current?.condition?.icon ?? "",
          maxTemp: data.forecast?.forecastday[0]?.day?.maxtemp_c ?? null,
          minTemp: data.forecast?.forecastday[0]?.day?.mintemp_c ?? null,
        });
      });
  }, [name]);

return ( 
    <div className="container">
        {weather.temp !== null && (
        <div>
        <h1>{name}</h1>
        <h2>{weather.temp}°C</h2>
        <h3>{weather.text}</h3>
        <p>↑ {weather.maxTemp}°C</p>
        <p>↓ {weather.minTemp}°C</p>
        <img src={weather.icon} />
        </div>
        )}
    </div>
    )
}

export default CurrentTemperature