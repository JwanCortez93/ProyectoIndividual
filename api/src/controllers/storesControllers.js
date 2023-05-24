require("dotenv").config();
const { API_KEY } = process.env;
const { Store } = require("../db");
const axios = require("axios");
const URL = `https://api.rawg.io/api/stores`;

const getStores = async () => {
  const stores = await axios(`${URL}${API_KEY}`);
  const newStores = [];
  stores.data.results.forEach((store) => {
    newStores.push({ name: store.name });
  });
  await Store.bulkCreate(newStores);
  return stores.data.results;
};

const getStoresDB = async () => {
  const stores = await Store.findAll();
  return stores;
};

module.exports = { getStores, getStoresDB };
