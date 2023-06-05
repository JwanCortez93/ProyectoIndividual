import { useState, useEffect } from "react";
import style from "../../Modules/Menu.module.css";
import { connect } from "react-redux";
import { filterVideogames, orderVideogames } from "../../Redux/actions";

const Menu = (
  { genres, platforms, page, filterVideogames, orderVideogames, handlePage },
  state
) => {
  const [parameters, setParameters] = useState({
    orderBy: "",
    genre: "",
    platform: "",
    ascendantOrder: true,
  });

  useEffect(() => {
    orderVideogames(parameters);
    filterVideogames(parameters);
  }, [parameters]);

  const handleOrder = () => {
    setParameters({
      ...parameters,
      ascendantOrder: !parameters.ascendantOrder,
    });
  };

  const handleChange = (event) => {
    setParameters({
      ...parameters,
      [event.target.name]: event.target.value,
    });

    console.log(state, parameters);
  };

  return (
    <div className={style.container}>
      <div className={style.flechas}>
        <div>
          {page !== 0 && (
            <button name="First" onClick={handlePage}>
              First
            </button>
          )}
        </div>
        <div>
          {page !== 0 && (
            <button name="Previous" onClick={handlePage}>
              Previous
            </button>
          )}
        </div>
      </div>
      <div>
        <select name="orderBy" onChange={handleChange}>
          <option hidden disabled selected>
            Order by:
          </option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="released">Release Date</option>
        </select>
        <button onClick={handleOrder}>
          {parameters.ascendantOrder ? "⬆️" : "⬇️"}
        </button>
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
      <div className={style.flechas}>
        <div>
          {page !== 6 && (
            <button name="Next" onClick={handlePage}>
              Next
            </button>
          )}
        </div>
        <div>
          {page !== 6 && (
            <button name="Last" onClick={handlePage}>
              Last
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterVideogames: (parameters) => {
      dispatch(filterVideogames(parameters));
    },
    orderVideogames: (parameters) => {
      dispatch(orderVideogames(parameters));
    },
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
