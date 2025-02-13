import { Box, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import WeatherInfo from "../../components/weatherInfoCard";
import ShiftCard from "../../components/hourlyWeatherCard";
import CurrentTemperature from "../../components/currentWeatherCard";

const City: React.FC = () => {
  const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
  const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
  const navigate = useNavigate();

  return (
    <Box 
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      color="white"
      p={6}
    >
      <VStack padding={6} align="center" w="full" maxW="500px">
        <CurrentTemperature />
        <ShiftCard shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />

        <Button 
          onClick={() => navigate(-1)}
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.600" }}
          size="lg"
          mt={4}
        >
          Go back
        </Button>
      </VStack>
    </Box>
  );
};

export default City;

