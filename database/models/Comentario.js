module.exports = function (Sequelize, DataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        texto: {
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
        },
        FK_userid: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        FK_productoid: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
    };

    const Comentario = Sequelize.define(alias, cols, config);

    // Relaciones
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "FK_userid"
        });

        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "FK_productoid"
        });
    };

    return Comentario;
};