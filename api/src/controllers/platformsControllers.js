require("dotenv").config();
const { API_KEY } = process.env;
const { Platform } = require("../db");
const axios = require("axios");
const URL = `https://api.rawg.io/api/platforms`;

const getPlatforms = async () => {
  const platforms = await axios(`${URL}${API_KEY}`);
  const newPlatforms = [];
  platforms.data.results.forEach((platform) => {
    newPlatforms.push({ name: platform.name });
  });
  await Platform.bulkCreate(newPlatforms);
  return platforms.data.results;
};

const getPlatformsDB = async () => {
  const platforms = await Platform.findAll();
  return platforms;
};

module.exports = { getPlatforms, getPlatformsDB };
