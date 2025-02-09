import './index.css'
import blackGlobe from '../../assets/icons/blackGlobe.svg'

const Shifts: React.FC<{ shifts: string[] }> = ({ shifts }) => {
  return (
    <ul className="shifts-container">
      {shifts.map((shift, index) => (
        <li key={index}>
          <p>{shift}</p>
          <img src={blackGlobe} alt={shift} />
          <p>-8°C</p>
        </li>
      ))}
    </ul>
  );
};

const WeatherInfo: React.FC<{ weatherInfo: string[] }> = ({ weatherInfo }) => {
  return (
    <ul className="weather-info-container">
      {weatherInfo.map((info, index) => (
        <li key={index}>
          <p>{info}</p>
          <p>teste</p>
        </li>
      ))}
    </ul>
  );
};

const City: React.FC = () => {
  const shifts = ["Dawn", "Morning", "Afternoon", "Night"];
  const weatherInfo = ["Wind Speed", "Sunrise", "Sunset", "Humidity"];

  return (
    <div className="container">
      <h1>Vancouver</h1>
      <h2>Snow</h2>
      <h3>-4°C</h3>
      <img src={blackGlobe} alt="Weather condition" />
      <Shifts shifts={shifts} />
      <WeatherInfo weatherInfo={weatherInfo} />
    </div>
  );
};

export default City;
