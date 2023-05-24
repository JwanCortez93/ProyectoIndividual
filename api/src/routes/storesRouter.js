const { Router } = require("express");
const {
  getStoresHandler,
  getStoresDBHandler,
} = require("../handlers/storesHandlers");

const storesRouter = Router();

storesRouter.get("/", getStoresHandler);
storesRouter.get("/db", getStoresDBHandler);

module.exports = storesRouter;
