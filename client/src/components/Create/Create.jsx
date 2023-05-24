import style from "../../Modules/Create.module.css";
import { Form } from "./Form";
import { useState, useEffect } from "react";
import axios from "axios";

export const Create = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        await axios.get("http://localhost:3001/genres");
        const genresResponse = await axios.get(
          "http://localhost:3001/genres/db"
        );
        await axios.get("http://localhost:3001/platforms");
        const platformsResponse = await axios.get(
          "http://localhost:3001/platforms/db"
        );
        await axios.get("http://localhost:3001/stores");
        const storesResponse = await axios.get(
          "http://localhost:3001/stores/db"
        );

        setInfo({
          genres: genresResponse.data,
          platforms: platformsResponse.data,
          stores: storesResponse.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getInfo();
  }, []);

  useEffect(() => console.log(info), [info]);

  return (
    <div className={style.container}>
      <h1>Esta es la Create page</h1>
      <Form
        genres={info.genres}
        platforms={info.platforms}
        stores={info.stores}
      />
    </div>
  );
};
