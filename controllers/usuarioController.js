let data = require("../db/index");
let db = require('../database/models');
let bcrypt = require('bcryptjs')

var usuarioController = {
  registro: function (req, res) {
    res.render("register");
  },

  login: function (req, res) {
    res.render("login");

    if (req.session.usuario) {
      return res.redirect('/users/profile');
    }

  },

  profile: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [{ association: "productos", include: [{ association: "comentarios" }] }, { association: "comentarios" }]
    })
      .then(function (usuario) {
        // res.send (usuario)

        res.render("profile", { usuario: usuario });
      })

  },

  nuevoUsuario: function (req, res) {
    db.Usuario.create({
      email: req.body.email,
      pass: bcrypt.hashSync(req.body.contraseña, 10),
      fecha: req.body.fecha_nacimiento,
      dni: req.body.documento,
      foto: req.body.foto
    })
      .then(function () {
        res.redirect('/users/login')
      })
  },

  loginSession: function (req, res) {

    // res.send(req.body)
    db.Usuario.findOne({
      where: { email: req.body.email }
    })

      .then(function (data) {
        if (data) {
          console.log("El usuario existe")
          if (bcrypt.compareSync(req.body.contra, data.pass)){
            console.log ("La contrasena es correcta")
            
            if (req.body.recordarme){
              console.log ("guardo en la cookie")
            }
            res.send ("Guardo los datos en la session")
          }
          else{
            res.send ("La contrasena es incorrecta")
          }
        }

        else {
          res.send("El usuario no existe")
        }
      })





  }



};

module.exports = usuarioController;