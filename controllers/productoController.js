let data = require('../db/index')

var productController = {
    detalleProducto: function (req, res) {
        let producto = {} 
        
        for (let i = 0; i < data.productos.length; i++) {
           
            if (data.productos[i].id == req.params.id) {
                producto = data.productos[i]
            }
            
        }
        
        res.render('product', {producto})
    },
    agregarProducto: function (req, res) {
        res.render('product-add', {
            usuario: data.usuario
        })
    },
    productos: function (req, res) {
        res.render("products", {
          productos: data.productos,
        });
      },
}

module.exports = productController