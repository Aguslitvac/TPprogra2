let data = require("../db/index");
let db = require("../database/models")

var usuarioController = {
  perfil: function (req, res) {
      db.Usuario.findOne({
          where: { id: req.params.id },
          include: [{ association: "productos" }]
      })
      .then(function (usuario) {
          res.render("profile", { usuario: usuario });
      })
      .catch(function (error) {
          res.send(error);
      });
  }
};

module.exports = usuarioController;
