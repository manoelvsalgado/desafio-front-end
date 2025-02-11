import axios from "axios";
import { WeatherData } from "../types/types";

const API_KEY = "0859778bf6364de7854190048250602";
const BASE_URL = "https://api.weatherapi.com/v1.json";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        days: 1,
        aqi: "no",
        alerts: "no",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados meteorológicos:", error);
    throw error;
  }
};

