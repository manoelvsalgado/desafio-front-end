

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

export default WeatherInfo;