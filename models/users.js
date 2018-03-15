module.exports = function(sequelize, Sequelize) {

    var users = sequelize.define('users', {
    
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
    
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    
        username: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
    
        about: {
            type: Sequelize.TEXT
        },
    
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
    
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    
        last_login: {
            type: Sequelize.DATE
        },
    
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    
    
    });

    users.associate = function (models) {
        users.hasMany(models.events, {
            onDelete: "cascade"
        });
    };
    
    return users;
    
}
