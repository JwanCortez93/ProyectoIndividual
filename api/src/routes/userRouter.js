const { Router } = require("express");
const { getUserHandler, postUserHandler } = require("../handlers/userHandlers");

const usersRouter = Router();

usersRouter.post("/", getUserHandler);
usersRouter.post("/create", postUserHandler);

module.exports = usersRouter;
