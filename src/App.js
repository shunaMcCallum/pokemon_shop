import './App.css';
import PokemonContainer from './containers/PokemonContainer';
import HomeContainer from './containers/HomeContainer';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route exact path="/pokemon" element={<PokemonContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
