let data = require("../db/index");

var usuarioController = {
  registro: function (req, res) {
    res.render("register");
  },

  login: function (req, res) {
    res.render("login");
  },

  profile: function (req, res) {
    const usuario = data.usuario;
    const productos = data.productos
    res.render("profile", { usuario, productos });
  },
};

module.exports = usuarioController;
