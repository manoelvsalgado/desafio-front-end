import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useWeatherData } from "../../utils/weatherData";
interface WeatherData {
  shift: string;
  temp: number | null;
  icon: string;
}

const Shifts: React.FC<{ shifts: string[] }> = ({ shifts }) => {
  const { name } = useParams<{ name: string }>();
  const { weatherData, loading } = useWeatherData(name);

  const hours = [3, 9, 15, 21];
  const hourlyWeather: WeatherData[] = weatherData
    ? hours.map((hour, index) => ({
        shift: shifts[index],
        temp: weatherData.forecast.forecastday[0].hour[hour]?.temp_c ?? null,
        icon: `https:${weatherData.forecast.forecastday[0].hour[hour]?.condition?.icon ?? ""}`,
      }))
    : [];

  if (loading) return <Text>Loading...</Text>;

  return (
    <HStack padding={4} width="100%" textAlign="center" p={4} color="white">
      {hourlyWeather.map((weather, index) => (
        <Box key={index} p={3} borderRadius="md" width="100%" textAlign="center">
          <Text fontSize="lg" fontWeight="bold">{weather.shift}</Text>
          <Image src={weather.icon} alt="Weather condition" boxSize="50px" mx="auto" />
          <Text fontSize="md">{weather.temp !== null ? `${weather.temp}°C` : "N/A"}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default Shifts;

