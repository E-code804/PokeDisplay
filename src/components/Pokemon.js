// React imports
import { RxCross1 } from "react-icons/rx";

const Pokemon = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pokemon">
        {data && (
          <div>
            {<RxCross1 id="trash" />}
            <img
              src={
                data.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="Front"
            />
            <h2>{data.forms[0].name}</h2>
            <hr />
            <div className="poke-info">
              <p>National #</p>
              <p>{data.id}</p>
            </div>
            <div className="poke-info">
              <p>Type</p>
              <p>{data.types[0].type.name}</p>
            </div>
            <div className="poke-info">
              <p>Height</p>
              <p>{data.height / 10}m</p>
            </div>
            <div className="poke-info">
              <p>Weight</p>
              <p>{data.weight / 10}kg</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
