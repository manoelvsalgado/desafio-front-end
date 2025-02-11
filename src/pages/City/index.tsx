import './index.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useWeather } from '../../context/weatherContext';
import WeatherInfo from '../../components/weatherInfo';
import Shifts from '../../components/shiftCard';
import { useEffect } from 'react';

  const City: React.FC = () => {
    const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
    const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
    const navigate = useNavigate();
    const { name } = useParams();
    const { city } = useParams<{ city: string }>();
    const { data, getWeather } = useWeather();
  
    const current = data.current;

    useEffect(() => {
      if (city) {
        getWeather(city);
      }
    }, [city]);

    return (
      <div className="container">
        <h1>{name}</h1>
        <h2>{current.condition.text}</h2>
        <h3>-4°C</h3>
        <img src={`https:${current.condition.icon}`} alt={current.condition.text} />
        <Shifts shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />
        <button onClick={() => navigate(-1)}>
          <p>Go back</p>
        </button>
      </div>
    );
  };

export default City;
