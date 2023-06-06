require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const URL = `https://api.rawg.io/api/games`;

const getVideogames = async () => {
  const arrayAPI = [];
  for (let i = 1; i < 4; i++) {
    const API_videogames = await axios(
      `${URL}${API_KEY}&page_size=35&page=${i}`
    );
    arrayAPI.push(...API_videogames.data.results);
  }

  const DB_videogames = await Videogame.findAll();

  return [...DB_videogames, ...arrayAPI].slice(0, 105);
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
  platforms,
  image,
  releaseDate,
  rating,
  genres,
  esrb_rating,
  additional_images,
  tags,
}) => {
  return await Videogame.create({
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating,
    genres,
    esrb_rating,
    additional_images,
    tags,
  });
};

module.exports = {
  getVideogame,
  getVideogames,
  searchVideogame,
  createVideogame,
};
