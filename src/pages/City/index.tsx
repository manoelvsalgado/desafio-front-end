import './index.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import WeatherInfo from '../../components/weatherInfo';
import Shifts from '../../components/shiftCard';

  const City: React.FC = () => {
    const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
    const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];
    const navigate = useNavigate();
    const { name } = useParams();

    return (
      <div className="container">
        <h1>{name}</h1>
        <h2>teste</h2>
        <h3>-4°C</h3>
        <img />
        <Shifts shifts={shifts} />
        <WeatherInfo weatherInfo={weatherInfo} />
        <button onClick={() => navigate(-1)}>
          <p>Go back</p>
        </button>
      </div>
    );
  };

export default City;
