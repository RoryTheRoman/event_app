var db = require("../models");
var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render('signup');
}

exports.signin = function (req, res) {
    res.render('signin');
}

exports.create = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    res.render('create', { first: first, last: last, user_id: user_id});
}

exports.oneEvent = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var idEvent = req.params.id;
    db.events.findOne({
        where: {
            id: idEvent
        }
    }).then(function (data) {
        var event = data;
        console.log(event);
        res.render("events", {first: first, last: last, event: event});
    });
}

exports.updateOneEvent = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var updEvent = req.params.id;
    db.events.findOne({
        where: {
            id: updEvent
        }
    }).then(function (data) {
        var event = data;
        console.log(event);
        res.render("update_event", {event: event});
    });
}

// exports.home = function (req, res) {
//     var first = req.user.firstname;
//     var last = req.user.lastname;
//     var user_id = req.user.id;
//     db.events.findAll({})
//     .then(function (dbevents) {
//         var events = dbevents;
//         res.render('home', { first: first, last: last, user_id: user_id, events: events});
//     });
// }

exports.update = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    var toUpdate = req.params.id;
    db.events.update({
        where: {
            id: toUpdate
        }
    }).then(function (data) {
        var event = data;
        console.log(event);
        res.render("events", {first: first, last: last, event: event});
    });
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}
