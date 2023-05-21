const { Router } = require("express");
const {
  getVideogamesHandler,
  getVideogameHandler,
  searchVideogameHandler,
  createVideogameHandler,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler); // https/localhost:3001/videogames
videogamesRouter.get("/:id", getVideogameHandler); // https/localhost:3001/videogames/:id
videogamesRouter.get("/name", searchVideogameHandler); // https/localhost:3001/videogames/name
videogamesRouter.post("/", createVideogameHandler); // https/localhost:3001/videogames

module.exports = videogamesRouter;
