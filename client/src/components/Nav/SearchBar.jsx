import { useState } from "react";
import style from "../../Modules/SearchBar.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [predictions, setPredictions] = useState([]);

  const searchGames = async (name) => {
    const foundGames = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    return foundGames.data;
  };

  const handleChange = async (event) => {
    searchGames(event.target.value)
      .then((response) => {
        const sortedData = response.sort((a, b) => b.metacritic - a.metacritic);
        setPredictions(sortedData.splice(0, 5));
        console.log(predictions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={style.div}>
      <div className={style.inputContainer}>
        <input
          onChange={handleChange}
          className={style.input}
          placeholder="Search Game"
          autoComplete="off"
        ></input>
        <ul className={style.predictions}>
          {predictions.map((pred) => {
            return (
              <Link
                onClick={() => setPredictions([])}
                style={{ textDecoration: "none", color: "black" }}
                to={`/detail/${pred.id}`}
              >
                <li className={style.items}>
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
      </div>
      <button className={style.button}>Search</button>
    </div>
  );
};
