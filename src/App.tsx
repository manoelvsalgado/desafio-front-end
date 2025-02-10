import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

function App() {
    return (
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/city/:city" element={<City />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;