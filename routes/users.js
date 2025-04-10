var express = require("express");
var router = express.Router();
let usuarioController = require("../controllers/usuarioController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", usuarioController.registro);

router.get("/login", usuarioController.login);

router.get("/profile", usuarioController.profile);

module.exports = router;
