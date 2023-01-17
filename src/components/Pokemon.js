// React imports
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

// Component imports
import PokeInfo from "./PokeInfo";
import TypesDisplay from "./TypesDisplay";

const Pokemon = ({ data, deleteMon }) => {
  const { id, height, weight, types } = data;
  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const imgURL =
    id < 650
      ? data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      : data.sprites.front_default;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pokemon">
        <div>
          {<RxCross1 id="trash" onClick={() => deleteMon(data.species.name)} />}

          <img id="poke-img" src={imgURL} alt="Front Sprite" />

          <Link
            to={`/${data.species.name}`}
            target="_blank"
            className="poke-link"
          >
            <h2 className="poke-name">{capitalize(data.species.name)}</h2>
          </Link>

          <hr />

          <PokeInfo title={"National #"} data={id} pad={true} />
          <TypesDisplay title={"Type"} types={types} pad={true} />
          <PokeInfo title={"Height"} data={`${height / 10} m`} pad={true} />
          <PokeInfo title={"Weight"} data={`${weight / 10} kg`} pad={true} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
