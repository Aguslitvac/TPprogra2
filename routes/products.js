var express = require('express');
var router = express.Router();
let productController = require('../controllers/productoController')
/* GET home page. */
router.get('/producto/:id', productController.detalleProducto)
router.get('/agregarproducto', productController.agregarProducto)

module.exports = router;
