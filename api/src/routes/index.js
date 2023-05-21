const { Router } = require("express");
const genresRoutes = require("../routes/genresRouter");
const videogamesRouter = require("../routes/videogamesRouter");
//TODO const clientsRouter = require("../routes/clientsRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//TODO router.use("/clients", clientsRouter);

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
