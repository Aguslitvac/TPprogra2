var express = require("express");
var router = express.Router();
let usuarioController = require("../controllers/usuarioController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", usuarioController.registro);
router.post('/register', usuarioController.nuevoUsuario);
router.get("/login", usuarioController.login);
router.post("/login", usuarioController.loginSession);
router.get("/profile/:id", usuarioController.profile);
router.post("/logout", usuarioController.logout);

module.exports = router;