import { Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWeatherStyles } from "../../utils/weatherTheme";
interface WeatherData {
  temp: number | null;
  icon: string;
  text: string;
  maxTemp: number | null;
  minTemp: number | null;
}

const API_KEY = "0859778bf6364de7854190048250602";

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

  const { backgroundColor, textColor } = useWeatherStyles(weather.temp);

  return (
    <Box w={1000} p={30} bg={backgroundColor} color={textColor} borderRadius="md" textAlign="center">
      {weather.temp !== null && (
        <>
          <Heading p={30} fontSize='48px'>{name}</Heading>
          <HStack justify='center'>
            <Heading p={30} fontSize='56px'>{weather.temp}°C</Heading>
            <VStack>
              <Text color='red'>↑ {weather.maxTemp}°C</Text>
              <Text color='blue'>↓ {weather.minTemp}°C</Text>
            </VStack>
          </HStack>
          <Text fontSize='32px'>{weather.text}</Text>
          <Image src={weather.icon} alt={weather.text} mx='auto' boxSize='auto' />
        </>
      )}
    </Box>
  );
};

export default CurrentTemperature;