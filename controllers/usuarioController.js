let data = require("../db/index");
let db = require('../database/models');
let bcrypt = require('bcryptjs');
const { where } = require("sequelize");

var usuarioController = {
  registro: function (req, res) {
    
    if(req.session.usuarioLogueado){
      res.redirect("/")
      
    }
    else{
      res.render("register", {error: ""});
    }
  },

  login: function (req, res) {

     if(req.session.usuarioLogueado){
      res.redirect("/")
      
    }
    else{
      res.render("login", {error: ""});
    }

  },

  profile: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [{ association: "productos", include: [{ association: "comentarios" }] }, { association: "comentarios" }]
    })
      .then(function (usuario) {
        //res.send (usuario)

        res.render("profile", { usuario: usuario });
      })

  },

  nuevoUsuario: function (req, res) {
    if (req.body.email.length==0){
      return res.render ("register",{error:"no puede estar el email vacio"}) 
      
    }
    else if (req.body.contraseña.length <=3){
      return res.render ("register",{error:"la contraseña debe tener al menos 3 caracteres"})
    }else{

      db.Usuario.findOne({
        where:{email: req.body.email}
      })
      .then (function(user){
        if (user){
          return res.render ("register",{error:"ya existe un usuario con ese email"})
        } else{
          console.log("todo ok")
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
        }
      })

    }
    
    
  },

  loginUsuario: function (req, res) {
    let email = req.body.email
    let contraseña = req.body.contraseña

    if (!email) {
      return res.render("login", { error: "El email no puede estar vacío" });
    }

    if (!contraseña) {
      return res.render("login", { error: "La contraseña no puede estar vacía" });
    }

    db.Usuario.findOne({ where: { email: email } })
      .then(function (user) {
        if (!user) {
          return res.render("login", { error: "No existe un usuario con ese email" });
        }

        if (bcrypt.compareSync(contraseña, user.pass)) {
          req.session.usuarioLogueado = user;

          
          if (req.body.recordarme) {
            res.cookie('usuarioEmail', user.email, { maxAge: 1000 * 60 * 5 }); 
          }

          return res.redirect('/');
        } else {
          return res.render("login", { error: "La contraseña es incorrecta" });
        }
      })
      .catch(function (error) {
        console.log(error);
        return res.render("login", { error: "Ocurrió un error en el login" });
      });
  }



};

module.exports = usuarioController;