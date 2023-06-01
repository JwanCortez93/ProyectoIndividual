import {
  ADD_ALL_FAVS,
  ADD_FAV,
  ADD_VIDEOGAME,
  FILTER_VIDEOGAMES,
  GET_GENRES,
  GET_PLATFORMS,
  GET_STORES,
  GET_VIDEOGAMES,
  REMOVE_FAV,
} from "./action-types";
import axios from "axios";

export const addFav = (name) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/favorites?name=${name}`)
      .then(({ data }) => {
        return dispatch({ type: ADD_FAV, payload: data });
      });
  };
};

export const removeFav = (name) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/favorites?name=${name}`)
      .then(({ data }) => {
        return dispatch({ type: REMOVE_FAV, payload: data });
      });
  };
};

export const addAllFavs = (favs) => {
  return { type: ADD_ALL_FAVS, payload: favs };
};

export const getVideogames = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/videogames`).then(({ data }) => {
      return dispatch({ type: GET_VIDEOGAMES, payload: data });
    });
  };
};

export const addVideogame = (videogame) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/videogames`, videogame)
      .then(({ data }) => {
        return dispatch({ type: ADD_VIDEOGAME, payload: data });
      });
  };
};

export const deleteVideogame = () => {};

export const getPlatforms = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/platforms/db`).then(({ data }) => {
      return dispatch({ type: GET_PLATFORMS, payload: data });
    });
  };
};

export const getGenres = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/genres/db`).then(({ data }) => {
      return dispatch({ type: GET_GENRES, payload: data });
    });
  };
};

export const getStores = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/stores/db`).then(({ data }) => {
      return dispatch({ type: GET_STORES, payload: data });
    });
  };
};

export const filterVideogames = (parameters) => {
  return { type: FILTER_VIDEOGAMES, payload: parameters };
};
