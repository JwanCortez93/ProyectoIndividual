const { Router } = require("express");
const {
  getPlatformsHandler,
  getPlatformsDBHandler,
} = require("../handlers/platformsHandlers");

const platformsRouter = Router();

platformsRouter.get("/", getPlatformsHandler);
platformsRouter.get("/db", getPlatformsDBHandler);

module.exports = platformsRouter;
