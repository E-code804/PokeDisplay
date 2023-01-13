// React imports
import { useEffect, useState } from "react";
// Component imports
import Input from "./components/Input";
import Display from "./components/Display";
import Error from "./components/Error";
// Styles import
import "./styles.css";

// TODO error outputs for when name DNE
const MAX_PARTY_SIZE = 6;

function App() {
  const [name, setName] = useState("");
  const [pokeNames, setPokeNames] = useState([]);
  const [data, setData] = useState(null);
  const [nameExistsError, setNameExistsError] = useState(false);
  const [limitError, setLimitError] = useState(false);

  const handleClick = () => {
    if (pokeNames.includes(name)) {
      setNameExistsError(true);
      setLimitError(false);
    } else if (pokeNames.length >= MAX_PARTY_SIZE) {
      setLimitError(true);
      setNameExistsError(false);
    } else {
      setPokeNames([...pokeNames, name]);
      setLimitError(false);
      setNameExistsError(false);
    }
    setName("");
  };

  useEffect(() => {
    const fetchData = () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeNames[pokeNames.length - 1]}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            // Let user know wrong poke name and remove from pokeNames
            throw new Error("Incorrect name");
          }
        })
        .then((data) => {
          setData(data);
        });
    if (pokeNames.length > 0) {
      fetchData();
    }
  }, [pokeNames]);

  return (
    <div className="main-div">
      <h1 className="mt-5">PokeTeam Display</h1>
      <p>Pick your favorite Pokemon</p>

      <Input setName={setName} handleClick={handleClick} name={name} />
      {nameExistsError && <Error description={"Name already in party!"} />}
      {limitError && <Error description={"Party number reached."} />}

      <ul>
        {pokeNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Display data={data} />
    </div>
  );
}

export default App;
