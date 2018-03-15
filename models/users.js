module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        }
    });

    users.associate = function (models) {
        users.hasMany(models.events, {
            onDelete: "cascade"
        });
    };

    return users;
};