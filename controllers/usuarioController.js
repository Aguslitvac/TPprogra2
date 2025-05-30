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

  loginSession: function (req, res) {

    // res.send(req.body)
    db.Usuario.findOne({
      where: { email: req.body.email }
    })

      .then(function (data) {
        if (data) {
          
          if (bcrypt.compareSync(req.body.contra, data.pass)){
            
            
            if (req.body.recordarme){
            res.cookie('usuarioLogueado', data,{ maxAge: 1000 * 60 * 5 });

            }
            req.session.usuarioLogueado= data
            res.redirect ("/")
          }
          else{
            res.send ("La contrasena es incorrecta")
          }
        }

        else {
          res.send("El usuario no existe")
        }
      })





  },

  logout: function (req, res){
    req.session.destroy()
    if(req.cookies.usuarioLogueado != undefined){
      res.clearCookie("usuarioLogueado")
      
    }
    res.redirect("/")
  }



};

module.exports = usuarioController;