const {
  getVideogame,
  getVideogames,
  searchVideogame,
  createVideogame,
} = require("../controllers/videogamesControllers.js");

const getVideogamesHandler = (req, res) => {
  try {
    const videogames = getVideogames();
    res.status(200).json(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogameHandler = (req, res) => {
  try {
    const videogame = getVideogame(req.params.id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchVideogameHandler = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createVideogameHandler = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameHandler,
  searchVideogameHandler,
  createVideogameHandler,
};
