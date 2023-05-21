const {
  getVideogame,
  getVideogames,
  searchVideogame,
  createVideogame,
} = require("../controllers/videogamesControllers.js");

const getVideogamesHandler = async (req, res) => {
  try {
    const query = req.query;
    if (!Object.keys(query).length) {
      const videogames = await getVideogames();
      return res.status(200).json(videogames);
    }
    const videogame = await searchVideogame(query.name);
    return res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogameHandler = async (req, res) => {
  try {
    console.log(req.params);
    const videogame = await getVideogame(req.params.id);
    console.log(videogame);
    // res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createVideogameHandler = async (req, res) => {
  try {
    const videogame = req.body;
    const newVideogame = await createVideogame(videogame);
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameHandler,
  createVideogameHandler,
};
