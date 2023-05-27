const { getUser, postUser } = require("../controllers/userControllers");

const getUserHandler = async (req, res) => {
  try {
    const info = req.body;
    const user = await getUser(info);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  try {
    const info = req.body;
    const users = await postUser(info);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUserHandler, postUserHandler };
