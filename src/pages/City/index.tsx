import './index.css'
import { useNavigate } from 'react-router-dom';
import WeatherInfo from '../../components/weatherInfo';
import Shifts from '../../components/shiftCard';
import CurrentTemperature from '../../components/currentTemperature';

  const City: React.FC = () => {
    const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
    const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
    const navigate = useNavigate();

    return (
      <div className="container">
        <CurrentTemperature />
        <Shifts shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />
        <button onClick={() => navigate(-1)}>
          <p>Go back</p>
        </button>
      </div>
    );
  };

export default City;
