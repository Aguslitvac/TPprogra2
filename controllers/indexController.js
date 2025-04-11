let data = require("../db/index");

let indexController = {
    home: function(req, res){
        const productos = data.productos
        res.render("index", {productos})    
    }, 

    search: function(req, res){
        const productos = data.productos
        res.render("search-results", {productos})    
    }, 

}


module.exports = indexController;