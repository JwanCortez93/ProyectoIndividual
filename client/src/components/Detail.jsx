import style from "./Modules/Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCard } from "./DetailCard";

export const Detail = () => {
  const [videogame, setVideogame] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getVideogame = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/videogames/${id}`
        );
        setVideogame(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getVideogame();
  }, []);

  return (
    <div className={style.div}>
      <h1>Esta es la Detail page</h1>
      <DetailCard
        id={videogame.id}
        name={videogame.name}
        image={videogame.background_image}
        platforms={videogame.platforms}
        description={videogame.description}
        released={videogame.released}
        rating={videogame.rating}
        genres={videogame.genres}
      />
    </div>
  );
};
