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

    //DELETE route for updating an event:
    app.delete("/events/api/delete", function (req, res) {
        db.events.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbevents) {
            res.json(dbevents);
        });
    });



    // app.get("/events/api/update_event", function (req, res) {
    //     db.events.findOne({
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(function (dbevents) {
    //         res.json(dbevents);
    //     });
    // });


        // //PUT route for updating an event:
        // app.put("/update_event/api/update", function (req, res) {
        //     console.log(req.body);
    
        //     db.events.update({
        //         event_name: req.body.event_name,
        //         event_date: req.body.event_date,
        //         location: req.body.location,
        //         start_time: req.body.start_time,
        //         end_time: req.body.end_time
        //     },
        //     {   where: {
        //         id: req.body.eventId
        //     }})
        //         .then(function (dbevents) {
        //             res.json(dbevents);
        //         });
        // });

    app.put("/api/events", function (req, res) {
        console.log(req.body);

        var idEvent = req.body.id;

        db.events.update({
            event_name: req.body.event_name,
            location: req.body.location,
            event_date: req.body.event_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
        },
        {where: {
            id: idEvent
        }}
    )
            .then(function (dbevents) {
                res.json(dbevents);
            });
    });

}