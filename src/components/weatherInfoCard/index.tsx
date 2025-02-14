import { Box, Text, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useWeatherData } from "../../utils/weatherData";

const WeatherInfo: React.FC<{ weatherInfo: string[] }> = ({ weatherInfo }) => {
  const { name } = useParams<{ name: string }>();
  const { weatherData, loading } = useWeatherData(name);

  const details = weatherData
    ? {
        windSpeed: `${weatherData.current.wind_kph} km/h`,
        sunrise: weatherData.forecast.forecastday[0].astro.sunrise,
        sunset: weatherData.forecast.forecastday[0].astro.sunset,
        humidity: `${weatherData.current.humidity}%`,
      }
    : null;

  const infoKeyMap: Record<string, string> = {
    "wind speed": "windSpeed",
    sunrise: "sunrise",
    sunset: "sunset",
    humidity: "humidity",
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <HStack padding={4} width="100%" textAlign="center" p={4}>
      {weatherInfo.map((info, index) => (
        <Box key={index} p={3} width="100%" textAlign="center">
          <Text fontSize="lg" fontWeight="bold">{info}</Text>
          <Text fontSize="md"> {details?.[infoKeyMap[info.toLowerCase()] as keyof typeof details] ?? "N/A"}
          </Text>
        </Box>
      ))}
    </HStack>
  );
};

export default WeatherInfo;


