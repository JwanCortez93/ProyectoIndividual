const { Favorite } = require("../db");

const getFavorites = async () => {
  const foundFavorites = await Favorite.findAll();
  return foundFavorites;
};

const postFavorite = async (name) => {
  const newFavorite = await Favorite.create({
    name,
  });
  return newFavorite;
};

const deleteFavorite = async (name) => {
  await Favorite.destroy({
    where: {
      name,
    },
  });
  return name;
};

module.exports = { getFavorites, postFavorite, deleteFavorite };
