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
  ORDER_VIDEOGAMES,
  CHANGE_VIDEOGAMES,
  RESET_VIDEOGAMES,
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

export const orderVideogames = (parameters) => {
  return { type: ORDER_VIDEOGAMES, payload: parameters };
};

export const filterVideogames = (parameters) => {
  return { type: FILTER_VIDEOGAMES, payload: parameters };
};

export const changeVideogames = (videogames) => {
  return { type: CHANGE_VIDEOGAMES, payload: videogames };
};

export const resetVideogames = () => {
  return { type: RESET_VIDEOGAMES, payload: null };
};
