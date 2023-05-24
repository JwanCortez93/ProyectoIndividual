const {
  getPlatforms,
  getPlatformsDB,
} = require("../controllers/platformsControllers");

const getPlatformsHandler = async (req, res) => {
  try {
    const platforms = await getPlatforms();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPlatformsDBHandler = async (req, res) => {
  try {
    const platforms = await getPlatformsDB();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPlatformsHandler, getPlatformsDBHandler };
