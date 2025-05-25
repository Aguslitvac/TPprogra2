let data = require('../db/index')
let db = require("../database/models")

var productController = {
    detalleProducto: function (req, res) {
        let producto = {} 
        
        db.Producto.findOne({
            where: {id: req.params.id}

        })
        .then(function (data) {
            res.send(data)
            res.render('product', {producto})
        })


        
    },
    agregarProducto: function (req, res) {
        res.render('product-add', {
            usuario: data.usuario
        })
    },
    
}

module.exports = productController