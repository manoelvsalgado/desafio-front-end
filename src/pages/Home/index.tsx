import { Box, VStack, Heading, Image, Link, ListItem, Stack } from "@chakra-ui/react";
import globeIcon from "../../assets/icons/whiteGlobe.svg";

interface CityListProps {
  cities: string[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <Stack padding={3} w="full" textAlign="center">
      {cities.map((city, index) => (
        <ListItem
          key={index}
          bg="gray.700"
          p={3}
          borderRadius="md"
          transition="0.2s"
          _hover={{ bg: "gray.600", transform: "scale(1.05)" }}
        >
          <Link href={`/city/${city}`} color="white" fontSize="lg" fontWeight="bold">
            {city}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};

const Home: React.FC = () => {
  const cities = ["Dallol", "Fairbanks", "London", "Recife", "Vancouver", "Yakutsk"];

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
      <VStack padding={4} align="center">
        <Heading size="2xl">Weather</Heading>
        <Heading size="lg" color="gray.400">Select a City</Heading>
        <Image src={globeIcon} boxSize="100px" alt="Globe logo" />
        <CityList cities={cities} />
      </VStack>
    </Box>
  );
};

export default Home;