import { Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useWeatherStyles } from "../../utils/weatherTheme";
import { useWeatherData } from "../../utils/weatherData";

const CurrentTemperature: React.FC = () => {
  const { name } = useParams();
  const { weatherData, loading } = useWeatherData(name);

  const temp = weatherData?.current?.temp_c ?? null;
  const maxTemp = weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c ?? null;
  const minTemp = weatherData?.forecast?.forecastday[0]?.day?.mintemp_c ?? null;
  const text = weatherData?.current?.condition?.text ?? "";
  const icon = weatherData?.current?.condition?.icon ?? "";

  const { backgroundColor, textColor } = useWeatherStyles(temp);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box w={1000} p={30} bg={backgroundColor} color={textColor} borderRadius="md" textAlign="center">
      {temp !== null && (
        <>
          <Heading p={30} fontSize='48px'>{name}</Heading>
          <HStack justify='center'>
            <Heading p={30} fontSize='56px'>{temp}°C</Heading>
            <VStack>
              <Text color='red'>↑ {maxTemp}°C</Text>
              <Text color='blue'>↓ {minTemp}°C</Text>
            </VStack>
          </HStack>
          <Text fontSize='32px'>{text}</Text>
          <Image src={icon} alt={text} mx='auto' boxSize='auto' />
        </>
      )}
    </Box>
  );
};

export default CurrentTemperature;
