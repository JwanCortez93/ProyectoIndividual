const { Router } = require("express");
const {
  getFavoriteHandler,
  postFavoriteHandler,
  deleteFavoriteHandler,
} = require("../handlers/favoriteHandlers");

const favoritesRouter = Router();

favoritesRouter.get("/", getFavoriteHandler);
favoritesRouter.post("/", postFavoriteHandler);
favoritesRouter.delete("/", deleteFavoriteHandler);

module.exports = favoritesRouter;
