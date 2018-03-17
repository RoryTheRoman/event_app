var path = require("path");
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.handlebars"))
    });

    app.get("/authenticated", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/authenticated.handlebars"))
    });

    app.get("/create", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/eventmaker.handlebars"))
    });

    app.get("/events-all", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/events-all.handlebars"))
    });


};