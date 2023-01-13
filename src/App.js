import { useState } from "react";
import Input from "./components/Input";
import "./styles.css";

// TODO error outputs for when name DNE, already in array, limit reached
const MAX_PARTY_SIZE = 6;

function App() {
  const [name, setName] = useState("");
  const [pokeNames, setPokeNames] = useState([]);

  const handleClick = () => {
    if (!pokeNames.includes(name) && pokeNames.length < MAX_PARTY_SIZE) {
      setPokeNames([...pokeNames, name]);
    }
    setName("");
  };

  return (
    <div className="main-div">
      <h1 className="mt-5">PokeTeam Display</h1>
      <p>Pick your favorite Pokemon</p>

      <Input setName={setName} handleClick={handleClick} name={name} />
      <ul>
        {pokeNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <div className="pokemon-display mt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pokemon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
