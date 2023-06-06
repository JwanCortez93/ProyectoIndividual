import style from "../../Modules/Cards.module.css";
import { Card } from "../Home/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CardsFavorite = ({ myFavorites }) => {
  
  return (
    <div className={style.gridContainer}>
      {myFavorites.map((videogame) => {
        return (
          <Card key={videogame.id} name={videogame.name} image="" genres={[]} />
        );
      })}
    </div>
  );
};
