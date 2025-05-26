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
        res.render('product-add', {
            usuario: data.usuario
        })
    },

    crearProducto: function (req, res) {
    db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        usuario_id: req.session.usuarioLogueado.id 
    })
    }
}

module.exports = productController
