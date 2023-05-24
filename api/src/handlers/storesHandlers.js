const { getStores, getStoresDB } = require("../controllers/storesControllers");

const getStoresHandler = async (req, res) => {
  try {
    const stores = await getStores();
    res.status(200).json(stores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStoresDBHandler = async (req, res) => {
  try {
    const stores = await getStoresDB();
    res.status(200).json(stores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getStoresHandler, getStoresDBHandler };
