import { useEffect } from "react";
import style from "../../Modules/Cards.module.css";
import { Card } from "./Card";

import { Link } from "react-router-dom";

export const Cards = ({ videogames }) => {
  return (
    <div className={style.gridContainer}>
      {videogames.map((videogame) => {
        return (
          <div key={videogame.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/detail/${videogame.id}`}
            >
              <Card
                name={videogame.name}
                image={videogame.background_image}
                genres={videogame.genres}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
