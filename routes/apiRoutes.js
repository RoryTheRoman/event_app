var db = require("../models");

module.exports = function (app) {

    //GET route for all events:
    app.get("/api/events/", function (req, res) {
        db.Event.findAll({}).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });
    //POST route for saving an event:
    app.post("/api/events", function (req, res) {
        // console.log(req.body);
        db.Event.create({
            // title: req.body.title,
            // body: req.body.body,
            // category: req.body.category
        })
            .then(function (dbEvent) {
                res.json(dbEvent);
            });
    });
    //GET route for events and attendees and items:
    app.get("/api/guests", function (req, res) {
        db.Guest.findAll({}).then(function (dbGuest) {
            res.json(dbGuest);
        });

    })
    //DELETE route guests
    app.delete("/api/guests/:id", function (req, res) {
        db.Guest.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbGuest) {
            res.json(dbGuest);
        });
    });
};