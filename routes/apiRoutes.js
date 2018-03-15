var db = require("../models");

module.exports = function (app) {

    //GET route for all events:
    app.get("/api/events/", function (req, res) {
        db.events.findAll({}).then(function (dbevents) {
            res.json(dbevents);
        });
    });
    //POST route for saving an event:
    app.post("/api/events", function (req, res) {
        // console.log(req.body);
        db.events.create({
            // title: req.body.title,
            // body: req.body.body,
            // category: req.body.category
        })
            .then(function (dbevents) {
                res.json(dbevents);
            });
    });
    //GET route for events and attendees and items:
    app.get("/api/guests", function (req, res) {
        db.guests.findAll({}).then(function (dbguests) {
            res.json(dbguests);
        });

    })
    //DELETE route guests
    app.delete("/api/guests/:id", function (req, res) {
        db.guests.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbguests) {
            res.json(dbguests);
        });
    });
};