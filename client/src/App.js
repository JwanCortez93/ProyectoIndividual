import "./App.css";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import { Landing } from "./components/Landing/Landing";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";
import { Error } from "./components/Error/Error";
import { About } from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import { Create } from "./components/Create/Create";
import { connect } from "react-redux";
import {
  getVideogames,
  getPlatforms,
  getGenres,
  getStores,
} from "./Redux/actions";

function App({
  getGenres,
  getPlatforms,
  getStores,
  getVideogames,
  videogames,
  genres,
  stores,
  platforms,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessGeneral, setAccess] = useState(false);
  const [visitHistory, setVisitHistory] = useState({
    home: 0,
    detail: 0,
    about: 0,
    favorites: 0,
    create: 0,
  });

  useEffect(async () => {
    const checkGenres = await axios.get("http://localhost:3001/genres/db");
    if (checkGenres.data.length === 0) {
      await axios.get(`http://localhost:3001/genres`);
      await axios.get(`http://localhost:3001/stores`);
      await axios.get(`http://localhost:3001/platforms`);
    }
    getGenres();
    getPlatforms();
    getStores();
    getVideogames();
  }, []);

  async function login(userData) {
    await axios
      .post(`http://localhost:3001/users/`, userData)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        accessGeneral && navigate("/home");
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <Home
              videogames={videogames}
              genres={genres}
              platforms={platforms}
              stores={stores}
            />
          }
        />
        <Route path="/" element={<Landing login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/create"
          element={
            <Create genres={genres} platforms={platforms} stores={stores} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stores: state.stores,
    platforms: state.platforms,
    genres: state.genres,
    videogames: state.videogames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideogames: () => {
      dispatch(getVideogames());
    },
    getPlatforms: () => {
      dispatch(getPlatforms());
    },
    getGenres: () => {
      dispatch(getGenres());
    },
    getStores: () => {
      dispatch(getStores());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
