import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "0859778bf6364de7854190048250602";

interface WeatherData {
  shift: string;
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
        console.error("Failed to get data:", error)
      );
  }, [name, shifts]);

  return (
    <HStack padding={4} width="100%" textAlign="center" p={4} color="white">
      {hourlyWeather.map((weather, index) => (
        <Box key={index} p={3} borderRadius="md" width="100%" textAlign="center">
          <Text fontSize="lg" fontWeight="bold">{weather.shift}</Text>
          <Image src={weather.icon} alt="Weather condition" boxSize="50px" mx="auto" />
          <Text fontSize="md">{weather.temp !== null ? `${weather.temp}°C` : "Loading..."}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default Shifts;

