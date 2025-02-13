import { Box, Text, HStack } from "@chakra-ui/react";
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
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&days=1`
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

  console.log(details);

  // Mapeamento das chaves para acessar corretamente os dados
  const infoKeyMap: Record<string, keyof WeatherDetails> = {
    "wind speed": "windSpeed",
    sunrise: "sunrise",
    sunset: "sunset",
    humidity: "humidity",
  };

  return (
    <HStack padding={4} width="100%" textAlign="center" p={4} color="white">
      {weatherInfo.map((info, index) => (
        <Box key={index} p={3} width="100%" textAlign="center">
          <Text fontSize="lg" fontWeight="bold">{info}</Text>
          <Text fontSize="md">
            {details
              ? details[infoKeyMap[info.toLowerCase()] as keyof WeatherDetails] || "Carregando..."
              : "Carregando..."}
          </Text>
        </Box>
      ))}
    </HStack>
  );
};

export default WeatherInfo;

