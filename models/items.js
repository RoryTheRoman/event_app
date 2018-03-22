module.exports = function (sequelize, DataTypes) {
    var items = sequelize.define("items", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
            // validate: {
            //     len: [1, 20]
            // }
        }
    });

    items.associate = function (models) {
        items.belongsTo(models.events, {
            foreignKey: {
                allowNull: false
            }, onDelete: 'CASCADE'}
        );
    };
    return items;
};