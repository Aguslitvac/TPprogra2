let data = require('../db/index')
let db = require("../database/models")

var productController = {
    detalleProducto: function (req, res) {
        
        db.Producto.findOne({
            where: {id: req.params.id},
            include: [{association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}]} 
            ]


        })
        .then(function (data) {
            // res.send(data) 
            res.render('product', {producto: data})
        })


        
    },
    agregarProducto: function (req, res) {
       
         if(req.session.usuarioLogueado){
            res.render('product-add')
      
    }
    else{
      res.redirect("/")
    }
        
    },

    crearProducto: function (req, res) {
    db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        FK_userid: req.session.usuarioLogueado.id 

        
    })
    .then(function () {
        res.redirect("/users/profile/" + req.session.usuarioLogueado.id)
    })
   
    },

    comentar: function (req, res) {
    db.Comentario.create({
        texto: req.body.comentario,
        FK_userid: req.session.usuarioLogueado.id,
        FK_productoid: req.params.id 

        
    })
    .then(function () {
        res.redirect("/products/producto/" + req.params.id)
    })
    },
}

module.exports = productController
