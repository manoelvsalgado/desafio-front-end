import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "0859778bf6364de7854190048250602";

interface WeatherDetails {
  windSpeed: string;
  sunrise: string;
  sunset: string;
  humidity: string;
}

const WeatherInfo: React.FC<{ weatherInfo: string[] }> = ({ weatherInfo }) => {
  const { name } = useParams<{ name: string }>();
  const [details, setDetails] = useState<WeatherDetails | null>(null);

  useEffect(() => {
    if (!name) return;

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&lang=pt&days=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.forecast) return;

        setDetails({
          windSpeed: `${data.current.wind_kph} km/h`,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          humidity: `${data.current.humidity}%`,
        });
      })
      .catch((error) =>
        console.error("Erro ao buscar informações meteorológicas:", error)
      );
  }, [name]);

  return (
    <ul className="weather-info-container">
      {weatherInfo.map((info, index) => (
        <li key={index}>
          <p>{info}</p>
          <p>
            {details
              ? details[
                  info.toLowerCase().replace(" ", "") as keyof WeatherDetails
                ] || "Carregando..."
              : "Carregando..."}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default WeatherInfo;
