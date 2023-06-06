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
    source: "",
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
  };

  const orderedGenres = genres.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return +1;
    }
    return 0;
  });

  const orderedPlatforms = platforms.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return +1;
    }
    return 0;
  });

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
      <div className={style.buttons}>
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
            {parameters.ascendantOrder ? "🔼" : "🔽"}
          </button>
        </div>
        <select name="platform" onChange={handleChange}>
          <option hidden disabled selected>
            Platforms
          </option>
          <option value="">All</option>
          {orderedPlatforms.map((platform) => {
            return <option key={platform.id}>{platform.name}</option>;
          })}
        </select>
        <select name="genre" onChange={handleChange}>
          <option hidden disabled selected>
            Genres
          </option>
          <option value="">All</option>
          {orderedGenres.map((genre) => {
            return <option key={genre.id}>{genre.name}</option>;
          })}
        </select>
        <select name="source" onChange={handleChange}>
          <option hidden disabled selected>
            Source
          </option>
          <option>Api</option>
          <option>Database</option>
          <option value="">Both </option>
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
  return { ...state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
