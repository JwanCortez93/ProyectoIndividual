import style from "../../Modules/Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "./DetailCard";

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
      <DetailCard
        id={videogame.id}
        name={videogame.name}
        image={
          videogame.background_image
            ? videogame.background_image
            : videogame.image
        }
        platforms={videogame.platforms}
        description={videogame.description_raw}
        released={
          videogame.released ? videogame.released : videogame.releaseDate
        }
        rating={videogame.rating}
        genres={videogame.genres}
      />
    </div>
  );
};
