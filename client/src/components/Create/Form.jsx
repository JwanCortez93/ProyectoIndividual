import style from "../../Modules/Form.module.css";
import { useState } from "react";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import axios from "axios";

export const Form = ({ genre, platforms, stores }) => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: "",
    genre: [],
    image: "",
    description: "",
    releaseDate: "",
    platforms: [],
    rating: 0,
    stores: [],
    tags: [],
    esrb_rating: "",
    additional_images: [],
  });

  const previousPage = () => {
    setPage(page - 1);
    console.log(form);
  };

  const nextPage = () => {
    setPage(page + 1);
    console.log(form);
  };

  const handleChange = (event) => {
    if (
      event.target.name === "genre" ||
      event.target.name === "platforms" ||
      event.target.name === "stores"
    ) {
      setForm({
        ...form,
        [event.target.name]: [...form[event.target.name], event.target.value],
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3001/videogames", form);
  };

  const checkCheckBox = (name, info) => {
    return form[info].includes(name);
  };

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        {page === 1 ? (
          <Page1
            check={checkCheckBox}
            formName={form.name}
            genre={genre}
            image={form.image}
            handleChange={handleChange}
            nextPage={nextPage}
          />
        ) : null}
        {page === 2 ? (
          <Page2
            handleChange={handleChange}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
        {page === 3 ? (
          <Page3
            check={checkCheckBox}
            releaseDate={form.releaseDate}
            rating={form.rating}
            platforms={platforms}
            stores={stores}
            handleChange={handleChange}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
        {page === 4 ? (
          <Page4 handleChange={handleChange} previousPage={previousPage} />
        ) : null}
      </form>
    </div>
  );
};
