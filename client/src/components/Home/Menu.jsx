import { useState } from "react";
import style from "../../Modules/Menu.module.css";
import { connect } from "react-redux";
import { filterVideogames } from "../../Redux/actions";

const Menu = (
  { videogames, genres, platforms, stores, filterVideogames },
  state
) => {
  console.log(state);

  const [ascendantOrder, setAscendantOrder] = useState(true);
  const [parameters, setParameters] = useState({
    orderBy: "",
    genre: "",
    platform: "",
  });

  const handleOrder = () => {
    setAscendantOrder(!ascendantOrder);
  };

  const handleChange = (event) => {
    setParameters({
      ...parameters,
      [event.target.name]: event.target.value,
    });

    filterVideogames(parameters);
    console.log( state, parameters);
  };

  return (
    <div className={style.container}>
      <select name="orderBy" onChange={handleChange}>
        <option hidden disabled selected>
          Order by:
        </option>
        <option>Name</option>
        <option>Rating</option>
        <option>Release Date</option>
      </select>
      <button onClick={handleOrder}>{ascendantOrder ? "⬆️" : "⬇️"}</button>
      <select name="platform" onChange={handleChange}>
        <option hidden disabled selected>
          Platforms
        </option>
        <option value="">All</option>
        {platforms.map((platform) => {
          return <option key={platform.id}>{platform.name}</option>;
        })}
      </select>
      <select name="genre" onChange={handleChange}>
        <option hidden disabled selected>
          Genres
        </option>
        <option value="">All</option>
        {genres.map((genre) => {
          return <option key={genre.id}>{genre.name}</option>;
        })}
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterVideogames: (parameters) => {
      dispatch(filterVideogames(parameters));
    },
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
