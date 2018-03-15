module.exports = function (sequelize, DataTypes) {
    var items = sequelize.define("items", {
        items_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        }
    });

    items.associate = function (models) {
        items.belongsTo(models.guests, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return items;
};