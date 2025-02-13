import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "0859778bf6364de7854190048250602";

interface WeatherData {
  shift: string; // Substituí "time" por "shift"
  temp: number | null;
  icon: string;
}

const Shifts: React.FC<{ shifts: string[] }> = ({ shifts }) => {
  const { name } = useParams<{ name: string }>();
  const [hourlyWeather, setHourlyWeather] = useState<WeatherData[]>([]);

  useEffect(() => {
    if (!name) return;

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&lang=pt&days=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.forecast) return;

        const hours = [3, 9, 15, 21];
        const forecast = hours.map((hour, index) => ({
          shift: shifts[index],
          temp: data.forecast.forecastday[0].hour[hour]?.temp_c ?? null,
          icon: `https:${data.forecast.forecastday[0].hour[hour]?.condition?.icon ?? ""}`,
        }));

        setHourlyWeather(forecast);
      })
      .catch((error) =>
        console.error("Erro ao buscar dados meteorológicos:", error)
      );
  }, [name, shifts]);

  console.log(shifts)

  return (
    <ul className="shifts-container">
      {hourlyWeather.map((weather, index) => (
        <li key={index}>
          <p>{weather.shift}</p>
          <img src={weather.icon} alt="Condição do tempo" />
          <p>{weather.temp !== null ? `${weather.temp}°C` : "Carregando..."}</p>
        </li>
      ))}
    </ul>
  );
};

export default Shifts;
