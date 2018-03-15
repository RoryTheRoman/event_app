module.exports = function (sequelize, DataTypes) {
    var events = sequelize.define("events", {
        // Giving the events model a name of type STRING
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
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
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });

    events.associate = function (models) {
        // Associating events with guests
        // When an Author is deleted, also delete any associated guests
        events.hasMany(models.guests, {
            onDelete: "cascade"
        });
    };

    events.associate = function (models) {
        events.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return events;
};