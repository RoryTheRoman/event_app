// module.exports = function (sequelize, DataTypes) {
//     var guests = sequelize.define("guests", {
//         guest_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1, 20]
//             }
//         },
//         contact: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [7, 11],
//                 isAlpha: false
//             }
//         }
//     });

//     guests.associate = function (models) {
//         guests.belongsTo(models.events, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };

//     // events.associate = function (models) {
//     //     // Associating events with guests
//     //     // When an Author is deleted, also delete any associated guests
//     //     events.hasMany(models.items, {
//     //         onDelete: "cascade"
//     //     });
//     // };

//     return guests;
// };