require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const URL = `https://api.rawg.io/api/games`;

const getVideogames = async () => {
  const API_videogames = await axios(`${URL}${API_KEY}&page_size=15`);
  const DB_videogames = await Videogame.findAll();
  console.log(API_videogames.data.results.length);
  return [...DB_videogames, ...API_videogames.data.results];
};

const getVideogame = async (id) => {
  if (id.includes("-")) {
    const videogame = await Videogame.findByPk(id);
    return videogame;
  } else {
    const videogame = await axios(`${URL}/${id}${API_KEY}`);
    return videogame.data;
  }
};

const searchVideogame = async (name) => {
  const DB_videogames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  const API_videogames = await axios(`${URL}${API_KEY}&search=${name}`);

  return [...DB_videogames, ...API_videogames.data.results].slice(0, 15);
};
const createVideogame = async ({
  name,
  description,
  platform,
  image,
  releaseDate,
  rating,
}) => {
  return await Videogame.create({
    name,
    description,
    platform,
    image,
    releaseDate,
    rating,
  });
};

module.exports = {
  getVideogame,
  getVideogames,
  searchVideogame,
  createVideogame,
};
