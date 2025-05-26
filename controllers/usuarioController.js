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
    db.Usuario.findOne({
      where:{id: req.params.id},
      include: [{association: "productos"}]
    })
    .then(function(usuario){
      res.render("profile", {usuario: usuario});
    })
    
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