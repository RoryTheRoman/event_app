module.exports = function (sequelize, DataTypes) {
    var events = sequelize.define("events", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false,
        }
    });

    events.associate = function (models) {
        events.hasMany(models.guests, {
            onDelete: "cascade"
        });
    };

    events.associate = function (models) {
        events.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return events;
};