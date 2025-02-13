import { Box, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import WeatherInfo from "../../components/weatherInfoCard";
import ShiftCard from "../../components/hourlyWeatherCard";
import CurrentTemperature from "../../components/currentWeatherCard";
import { useWeatherStyles } from "../../utils/weatherTheme";
import { useState } from "react";

const City: React.FC = () => {
  const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
  const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
  const navigate = useNavigate();
  const [weather] = useState<{ temp: number | null }>({ temp: null });
  const { backgroundColor, textColor } = useWeatherStyles(weather.temp);

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={backgroundColor}
      color={textColor}
      p={6}
    >
      <VStack padding={6} width="100%" maxW="500px" textAlign="center">
        <CurrentTemperature />
        <ShiftCard shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />
        
        <Button 
          size="lg" 
          mt={4} 
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </VStack>
    </Box>
  );
};

export default City;