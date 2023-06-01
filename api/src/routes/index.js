const { Router } = require("express");
const genresRouter = require("../routes/genresRouter");
const videogamesRouter = require("../routes/videogamesRouter");
const platformsRouter = require("../routes/platformsRouter");
const storesRouter = require("../routes/storesRouter");
const usersRouter = require("../routes/userRouter");
const favoritesRouter = require("./favoritesRouter.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/platforms", platformsRouter);
router.use("/stores", storesRouter);
router.use("/users", usersRouter);
router.use("/favorites", favoritesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
