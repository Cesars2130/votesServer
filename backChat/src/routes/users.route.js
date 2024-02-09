const express = require('express');
const router = express.Router();

const usuarioRouter = require("../controllers/usuario.controller")

router.post("/",usersRouter.postUsuario)
router.get("/:id",usersRouter.getUsuarioById)
router.post("/login",usersRouter.login)
module.exports = router;