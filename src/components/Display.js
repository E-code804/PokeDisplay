import Pokemon from "./Pokemon";

const Display = ({ data }) => {
  return (
    <div className="pokemon-display mt-3 mb-5">
      <div className="container">
        <div className="row">
          <Pokemon data={data} />
          <Pokemon data={data} />
          <Pokemon data={data} />
          <Pokemon data={data} />
          <Pokemon data={data} />
          <Pokemon data={data} />
        </div>
      </div>
    </div>
  );
};

export default Display;
