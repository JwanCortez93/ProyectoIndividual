import { useState } from "react";
import style from "../../Modules/SearchBar.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeVideogames } from "../../Redux/actions";

const SearchBar = ({ changeVideogames }) => {
  const [searchText, setSearchText] = useState("");
  const [predictions, setPredictions] = useState([]);

  const searchGames = async (name) => {
    const foundGames = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    return foundGames.data;
  };

  const handleSearch = async (event) => {
    const foundGames = await axios.get(
      `http://localhost:3001/videogames?name=${searchText}`
    );
    changeVideogames(foundGames.data);
    setSearchText("");
  };

  const handleChange = async (event) => {
    setSearchText(event.target.value);
    searchGames(event.target.value)
      .then((response) => {
        const sortedData = response.sort((a, b) => b.metacritic - a.metacritic);
        setPredictions(sortedData.splice(0, 5));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={style.div}>
      <div>
        <input
          value={searchText}
          onChange={handleChange}
          className={style.input}
          placeholder="Search Game"
          autoComplete="off"
        ></input>
        <div className={style.predictions}>
          {searchText && (
            <ul>
              {predictions.map((pred, index) => {
                return (
                  <Link
                    onClick={() => setPredictions([])}
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/detail/${pred.id}`}
                  >
                    <li key={index} className={style.items}>
                      <img
                        style={{
                          marginRight: "2em",
                          width: "4rem",
                          height: "5rem",
                          objectFit: "cover",
                        }}
                        src={pred.background_image}
                        alt={pred.name}
                      />
                      <h4>{pred.name}</h4>
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <button onClick={handleSearch} className={style.button}>
        Search
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeVideogames: (videogames) => {
      dispatch(changeVideogames(videogames));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
