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
    res.render("profile", { usuario });
  },
};

module.exports = usuarioController;
