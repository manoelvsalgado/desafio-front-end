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

export default Shifts;
  