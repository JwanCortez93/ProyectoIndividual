require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../db");
const axios = require("axios");
const URL = `https://api.rawg.io/api/genres`;

const getGenres = async () => {
  const genres = await axios(`${URL}${API_KEY}`);
  const newGenres = [];
  genres.data.results.forEach((genre) => newGenres.push({ name: genre.name }));
  await Genre.bulkCreate(newGenres);
  return genres.data.results;
};

module.exports = { getGenres };
