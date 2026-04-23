const UserModel = require("../models/UserModel");

const UserController = {
  listarUsuarios: (req, res) => {
    const usuarios = UserModel.getAll();
    res.json(usuarios);
  },
};

module.exports = UserController;
