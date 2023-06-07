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
                id={videogame.id}
                name={videogame.name}
                image={
                  videogame.background_image
                    ? videogame.background_image
                    : videogame.image
                }
                genres={videogame.genres}
                rating={videogame.rating}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
