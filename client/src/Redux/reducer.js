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
  RESET_VIDEOGAMES,
} from "./action-types";

const initialState = {
  stores: [],
  platforms: [],
  genres: [],
  allVideogames: [],
  searchedVideogames: [],
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
        searchedVideogames: action.payload,
        allVideogames: action.payload,
      };
    case ADD_VIDEOGAME:
      return {
        ...state,
        videogames: [...action.payload, ...state.videogames],
        searchedVideogames: [...action.payload, ...state.videogames],
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
      const orderVideogames = state.searchedVideogames.sort((a, b) => {
        if (orderBy === "name") {
          if (ascendantOrder) {
            return a.name.localeCompare(b.name);
          }
          return b.name.localeCompare(a.name);
        }
        if (orderBy === "released") {
          if (ascendantOrder) {
            return new Date(a.released) - new Date(b.released);
          }
          return new Date(b.released) - new Date(a.released);
        }
        if (ascendantOrder) {
          return a[orderBy] - b[orderBy];
        }
        return b[orderBy] - a[orderBy];
      });

      return {
        ...state,
        videogames: [...orderVideogames],
        allVideogames: [...orderVideogames],
        searchedVideogames: [...orderVideogames],
      };

    case FILTER_VIDEOGAMES:
      const { genre, platform, source } = action.payload;
      let filteredGames = state.searchedVideogames;
      if (!genre && !platform && !source) {
        return {
          ...state,
          videogames: state.searchedVideogames,
        };
      }
      if (genre) {
        filteredGames = filteredGames.filter((game) => {
          return game.genres.some((obj) => obj.name === genre);
        });
      }

      if (platform) {
        filteredGames = filteredGames.filter((game) => {
          return game.platforms.some((obj) => obj.platform.name === platform);
        });
      }

      if (source === "Api") {
        filteredGames = filteredGames.filter((game) => {
          const id = game.id.toString();
          return !id.includes("-");
        });
      }

      if (source === "Database") {
        filteredGames = filteredGames.filter((game) => {
          const id = game.id.toString();
          return id.includes("-");
        });
      }

      return {
        ...state,
        videogames: [...filteredGames],
      };
    // const { genre, platform, source } = action.payload;
    // if (genre === "" && platform === "" && source) {
    //   return {
    //     ...state,
    //     videogames: state.allVideogames,
    //   };
    // } else {
    //   const filteredGames = state.allVideogames.filter((game) => {
    //     if (genre === "") {
    //       return game.platforms.some((obj) => obj.platform.name === platform);
    //     }
    //     if (platform === "") {
    //       return game.genres.some((obj) => obj.name === genre);
    //     }
    //     return (
    //       game.genres.some((obj) => obj.name === genre) &&
    //       game.platforms.some((obj) => obj.platform.name === platform)
    //     );
    //   });

    //   return {
    //     ...state,
    //     videogames: [...filteredGames],
    //   };
    // }
    case CHANGE_VIDEOGAMES:
      return {
        ...state,
        videogames: [...action.payload],
        searchedVideogames: [...action.payload],
      };

    case RESET_VIDEOGAMES:
      return {
        ...state,
        videogames: [...state.allVideogames],
        searchedVideogames: [...state.allVideogames],
      };

    default:
      return { ...state };
  }
};

export default reducer;
