import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './compenent/Navbar';
import Reserv from './compenent/Reservation';
import Contact from './compenent/Contact';
import Acuille from './compenent/Accuille';
import Seconecter from './compenent/Seconecter';
import Sincrire from './compenent/Sincrire';

function App() {
  return (
    <div className="App">
      <Navbar/>

    <Routes>
      <Route path="/"  element={<Acuille />} />
      <Route path="/Reservation"  element={<Reserv />} />
      <Route path="/conecter"  element={<Seconecter />} />
      <Route path="/S'inscrire"  element={<Sincrire />} />
      <Route path="/contact"  element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
