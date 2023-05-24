const { getGenres, getGenresDB } = require("../controllers/genreControllers");

const getGenresHandler = async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGenresDBHandler = async (req, res) => {
  try {
    const genres = await getGenresDB();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getGenresHandler, getGenresDBHandler };
