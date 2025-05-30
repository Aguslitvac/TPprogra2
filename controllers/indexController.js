let db = require("../database/models");
let op = db.Sequelize.Op;

let indexController = {
  home: function (req, res) {
    db.Producto.findAll({
      include: [{ association: "usuario" }, { association: "comentarios" }],
    }).then(function (data) {
      // res.send (data)
      res.render("index", { productos: data });
    });
  },

  search: function (req, res) {
    db.Producto.findAll({
      where: {
        nombre: { [op.like]: `%${req.query.search}%`},
      },

      include: [{ association: "usuario" }, { association: "comentarios" }],
    }).then(function (data) {
      // res.send (data)

      res.render("search-results", {
        productos: data,
        busqueda: req.query.search,
      });
    });
  },
};

module.exports = indexController;