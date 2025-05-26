let data = require("../db/index");
let db = require ('../database/models');
let bcrypt = require ('bcryptjs')

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

  nuevoUsuario: function (req, res) {
    db.Usuario.create ({
      email: req.body.email,
      pass: bcrypt.hashSync(req.body.contraseña, 10),
      fecha: req.body.fecha_nacimiento,
      dni: req.body.documento,
      foto: req.body.foto
    })
.then(function(){
  res.redirect('/users/login')
})
  },
};

module.exports = usuarioController;