import './index.css'
import globeIcon from '../../assets/icons/whiteGlobe.svg'

interface CityListProps {
  cities: string[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>
          <a href="#">{city}</a>
        </li>
      ))}
    </ul>
  )
}

const Home: React.FC = () => {
  const cities = ["Dallol", "Fairbanks", "London", "Recife", "Vancouver", "Yakutsk"]

  return (
    <div className='container'>
      <h1>Weather</h1>
      <h2>Select a City</h2>
      <div>
        <img src={globeIcon} className="logo" alt="Globe logo"/>
      </div>
      <CityList cities={cities} />
    </div>
  )
}

export default Home
