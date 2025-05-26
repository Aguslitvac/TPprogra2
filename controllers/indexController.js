let data = require("../db/index");
let db = require("../database/models")

var indexController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "usuario" }]
        })
        .then(function (productos) {
            res.render("index", { productos: productos });
        })
        .catch(function (error) {
            res.send(error);
        });
    }
};


module.exports = indexController;