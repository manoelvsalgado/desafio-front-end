import './index.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

interface WeatherData {
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }

const API_KEY = "0859778bf6364de7854190048250602";

const CurrentTemperature: React.FC = () => {
  const { name } = useParams();
  const [temperature, setTemperature] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${name}&lang=pt`)
      .then((response) => response.json())
      .then((data : WeatherData) => 
        setTemperature(data.current?.temp_c))
        setIcon(data.current?.condition?.icon);
    }, [name]); 

    console.log(icon)

return ( 
    <div className="container">
        <h1>{name}</h1>
        <h2>{temperature}</h2>
        {icon && <img src={icon} alt="Ícone do clima" />}    
    </div>
    )
}

export default CurrentTemperature