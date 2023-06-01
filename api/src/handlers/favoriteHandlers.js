const {
  getFavorites,
  postFavorite,
  deleteFavorite,
} = require("../controllers/favoriteControllers");

const getFavoriteHandler = async (req, res) => {
  try {
    const favorites = await getFavorites();
    fil;
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postFavoriteHandler = async (req, res) => {
  try {
    const info = req.query.name;
    const favorites = await postFavorite(info);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFavoriteHandler = async (req, res) => {
  try {
    const name = req.query.name;
    const deleted = await deleteFavorite(name);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFavoriteHandler,
  postFavoriteHandler,
  deleteFavoriteHandler,
};
