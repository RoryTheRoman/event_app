var db = require("../models");
var authController = require('../controllers/authController.js');

module.exports = function (app) {  
    //POST route for saving an event:
    app.post("/api/events", function (req, res) {
        console.log(req.body);
        db.events.create({
            event_name: req.body.event_name,
            location: req.body.location,
            event_date: req.body.event_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            userId: req.body.userId
        })
            .then(function (dbevents) {
                res.json(dbevents);
            });
    });

    //POST route for saving a guest:
    app.post("/api/guests", function (req, res) {
        db.guests.create({
            guest_name: req.body.guest_name,
            contact: req.body.contact,
            eventId: req.body.eventId
        })
            .then(function (dbguests) {
                res.json(dbguests);
            });
    });

    //DELETE route for deleting an event:
    app.delete("/events/api/delete", function (req, res) {
        db.events.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbevents) {
            res.json(dbevents);
        });
    });

    //PUT route for updating an event:
    app.put("/api/events", function (req, res) {
        var idEvent = req.body.id;

        db.events.update({
            event_name: req.body.event_name,
            location: req.body.location,
            event_date: req.body.event_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
        },
        {   where: {
            id: idEvent
        }})
        .then(function (dbevents) {
            res.json(dbevents);
        });
    });
}