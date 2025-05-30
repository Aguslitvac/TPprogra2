var express = require('express');
var router = express.Router();
let productController = require('../controllers/productoController')
/* GET home page. */

router.get('/producto/:id', productController.detalleProducto)
router.get('/agregarproducto', productController.agregarProducto)
router.post('/add', productController.crearProducto)
router.post("/comentar/:id", productController.comentar)

module.exports = router;
