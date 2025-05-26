const { usuario } = require("../../db")

module.exports = function (Sequelize, DataTypes) {
    let alias = "Usuario"
    let cols = {
        id: {
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        email: {
            notNull: true,
            unique: true,
            type: DataTypes.STRING
        },
        pass: {
            type: DataTypes.STRING,
            notNull: true,
        },
        fecha: {
            type: DataTypes.DATE,
            notNull: true,
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        foto: {
            type: DataTypes.STRING,
            notNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,

    }

    let Usuario = Sequelize.define(alias, cols, config)

   // Relaciones
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "FK_userid"
        });
    
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "FK_userid"
        });
    };
return Usuario  
}
