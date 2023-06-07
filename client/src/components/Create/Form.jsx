import style from "../../Modules/Form.module.css";
import { useState } from "react";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import axios from "axios";
import { connect } from "react-redux";
import { getVideogames } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const Form = ({ genres, platforms, stores, getVideogames }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: "",
    genres: [],
    image: "",
    description: "",
    releaseDate: null,
    platforms: [],
    rating: 0,
    stores: [],
    tags: [],
    esrb_rating: "",
    additional_images: [],
  });

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    if (!form.name || form.genres.length === 0 || !form.image) {
      return window.alert("Los campos de esta página son obligatorios");
    }
    setPage(page + 1);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    await axios.post("http://localhost:3001/videogames", form);
    getVideogames();
    window.alert("Videojuego creado");
    navigate("/home");
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
            genres={genres}
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
            platforms={platforms}
            handleChange={handleChange}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
        {page === 4 ? (
          <Page5
            check={checkCheckBox}
            rating={form.rating}
            stores={stores}
            nextPage={nextPage}
            handleChange={handleChange}
            previousPage={previousPage}
          />
        ) : null}
        {page === 5 ? (
          <Page4 handleChange={handleChange} previousPage={previousPage} />
        ) : null}
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideogames: () => {
      dispatch(getVideogames());
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
