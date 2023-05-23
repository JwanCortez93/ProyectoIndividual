import style from "../../Modules/Form.module.css";
import { useState } from "react";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";

export const Form = () => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: "",
    genres: [],
    image: "",
    description: "",
    releaseDate: "",
    platforms: [],
    rating: 0,
    stores: [],
    tags: [],
    esrb_rating: "",
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
      event.target.name === "genres" ||
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        {page === 1 ? (
          <Page1 handleChange={handleChange} nextPage={nextPage} />
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
