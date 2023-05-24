const { Router } = require("express");
const {
  getGenresHandler,
  getGenresDBHandler,
} = require("../handlers/genreHandlers");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);
genresRouter.get("/db", getGenresDBHandler);

module.exports = genresRouter;
