import {
  ADD_ALL_FAVS,
  ADD_FAV,
  ADD_VIDEOGAME,
  GET_VIDEOGAMES,
  DELETE_VIDEOGAME,
  GET_GENRES,
  GET_PLATFORMS,
  GET_STORES,
  REMOVE_FAV,
  FILTER_VIDEOGAMES,
  ORDER_VIDEOGAMES,
  CHANGE_VIDEOGAMES,
} from "./action-types";

const initialState = {
  stores: [],
  platforms: [],
  genres: [],
  allVideogames: [],
  videogames: [],
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.name !== action.payload
        ),
      };

    case ADD_ALL_FAVS:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };
    case ADD_VIDEOGAME:
      return {
        ...state,
        videogames: [...action.payload, ...state.videogames],
        allVideogames: [...action.payload, ...state.videogames],
      };
    case DELETE_VIDEOGAME:

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case GET_STORES:
      return {
        ...state,
        stores: action.payload,
      };

    case ORDER_VIDEOGAMES:
      const { orderBy, ascendantOrder } = action.payload;
      if (orderBy === "") return { ...state };
      const orderVideogames = state.allVideogames.sort((a, b) => {
        return ascendantOrder
          ? a[orderBy] - b[orderBy]
          : b[orderBy] - a[orderBy];
      });
      return {
        ...state,
        videogames: orderVideogames,
        allVideogames: orderVideogames,
      };

    case FILTER_VIDEOGAMES:
      const { genre, platform } = action.payload;
      if (genre === "" && platform === "") {
        return {
          ...state,
          videogames: state.allVideogames,
        };
      } else {
        const filteredGames = state.allVideogames.filter((game) => { 
          if (genre === "") {
            return game.platforms.some((obj) => obj.platform.name === platform);
          }
          if (platform === "") {
            return game.genres.some((obj) => obj.name === genre);
          }
          return (
            game.genres.some((obj) => obj.name === genre) &&
            game.platforms.some((obj) => obj.platform.name === platform)
          );
        });

        return {
          ...state,
          videogames: [...filteredGames],
        };
      }
    case CHANGE_VIDEOGAMES:
      return {
        ...state,
        videogames: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default reducer;
