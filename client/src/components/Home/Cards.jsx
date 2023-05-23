import style from "../../Modules/Cards.module.css";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    const getVideogames = async () => {
      try {
        const response = await axios.get("http://localhost:3001/videogames");

        setVideogames(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getVideogames();
  }, []);

  return (
    <div className={style.gridContainer}>
      {videogames.map((videogame) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/detail/${videogame.id}`}
          >
            <Card
              key={videogame.id}
              name={videogame.name}
              image={videogame.background_image}
              genres={videogame.genres}
            />
          </Link>
        );
      })}
    </div>
  );
};
