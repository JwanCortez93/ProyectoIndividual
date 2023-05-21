const { Router } = require("express");
const genresRouter = require("../routes/genresRouter");
const videogamesRouter = require("../routes/videogamesRouter");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
