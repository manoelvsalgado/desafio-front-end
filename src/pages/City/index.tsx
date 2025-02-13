import { useNavigate } from 'react-router-dom';
import WeatherInfo from '../../components/weatherInfoCard';
import ShiftCard from '../../components/hourlyWeatherCard';
import CurrentTemperature from '../../components/currentWeatherCard';

  const City: React.FC = () => {
    const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
    const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
    const navigate = useNavigate();

    return (
      <div className="container">
        <CurrentTemperature />
        <ShiftCard shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />
        <button onClick={() => navigate(-1)}>
          <p>Go back</p>
        </button>
      </div>
    );
  };

export default City;
