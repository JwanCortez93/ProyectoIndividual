const { User } = require("../db");

const getUser = async ({ email, password }) => {
  const foundUser = await User.findOne({
    where: {
      email,
      password,
    },
  });
  return foundUser ? foundUser.access : false;
};

const postUser = async ({ email, password }) => {
  const newUser = await User.create({
    email,
    password,
  });
  return newUser;
};

module.exports = { getUser, postUser };
