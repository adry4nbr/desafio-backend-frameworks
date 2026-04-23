const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/usuarios", UserController.listarUsuarios);

module.exports = router;
