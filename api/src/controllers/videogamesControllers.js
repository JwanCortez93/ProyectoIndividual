require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre, Store, Platform } = require("../db");
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

  const DB_videogames = await Videogame.findAll({
    include: [{ model: Genre }, { model: Store }, { model: Platform }],
  });

  return [...DB_videogames, ...arrayAPI].slice(0, 105);
};

const getVideogame = async (id) => {
  console.log(id);
  if (id.toString().includes("-")) {
    const videogame = await Videogame.findByPk(id, {
      include: [{ model: Genre }, { model: Store }, { model: Platform }],
    });
    console.log(videogame.dataValues);
    return videogame.dataValues;
  } else {
    const videogame = await axios(`${URL}/${id}${API_KEY}`);
    console.log(videogame.data);
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
  stores,
  esrb_rating,
  additional_images,
  tags,
}) => {
  let allGenres = [];
  for (const genre of genres) {
    const found = await Genre.findOne({
      where: {
        name: genre,
      },
    });
    if (found) {
      allGenres.push(found);
    }
  }
  let allStores = [];
  for (const store of stores) {
    const found = await Store.findOne({
      where: {
        name: store,
      },
    });
    if (found) {
      allStores.push(found);
    }
  }
  let allPlatforms = [];
  for (const platform of platforms) {
    const found = await Platform.findOne({
      where: {
        name: platform,
      },
    });
    if (found) {
      allPlatforms.push(found);
    }
  }
  const newVideogame = await Videogame.create({
    name,
    description_raw: description,
    platforms,  
    image,
    releaseDate,
    rating,

    esrb_rating,
    additional_images,
    tags,
  });

  await newVideogame.addGenres(allGenres);
  await newVideogame.addStores(allStores);
  await newVideogame.addPlatforms(allPlatforms);

  return newVideogame;
};

module.exports = {
  getVideogame,
  getVideogames,
  searchVideogame,
  createVideogame,
};
