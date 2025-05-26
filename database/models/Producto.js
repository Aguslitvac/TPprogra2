module.exports = function (Sequelize, DataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        imagen: {
            type: DataTypes.STRING(50),
            notNull: true,
        },
        nombre: {
            type: DataTypes.STRING,
            notNull: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            notNull: true,
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE,
        
        },
        FK_userid: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
        
    };

    const Producto = Sequelize.define(alias, cols, config);

    //Relaciones
    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "FK_userid"
        });
    
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "FK_productoid"
        });
    };
    

    return Producto;
};

