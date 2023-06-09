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
import { Redirect } from "./components/Redirect";
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

  useEffect(() => {
    !accessGeneral && navigate("/");
  }, [accessGeneral]);

  useEffect(() => {
    async function fetchData() {
      const checkGenres = await axios.get("http://localhost:3001/genres/db");
      if (checkGenres.data.length === 0) {
        await axios.get(`http://localhost:3001/stores`);
        await axios.get(`http://localhost:3001/platforms`);
        await axios.get(`http://localhost:3001/genres`);
      }
      getPlatforms();
      getStores();
      getGenres();
      getVideogames();
    }
    fetchData();
  }, []);

  async function login(userData) {
    await axios
      .post(`http://localhost:3001/users/`, userData)
      .then(({ data }) => {
        setAccess(data);
      });
  }

  useEffect(() => {
    if (accessGeneral) {
      navigate("/home");
    }
  }, [accessGeneral]);

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/error" ? (
        <Nav />
      ) : null}
      <div id="background"></div>
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
        <Route
          path="/"
          element={<Landing setAccess={setAccess} login={login} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/create"
          element={
            <Create genres={genres} platforms={platforms} stores={stores} />
          }
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Redirect />} />
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
