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

exports.home = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    db.events.findAll({})
    .then(function (dbevents) {
        var events = dbevents;
        res.render('home', { first: first, last: last, user_id: user_id, events: events});
    });
}

exports.delete = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    var toDelete = req.params.id;
    db.events.destroy({
        where: {
            id: toDelete
        }
    }).then(function (data) {
        var info = data;
            res.render('home', {first: first, last: last, user_id: user_id, data: data});
        });
}

// exports.events = function (req, res) {
//     console.log(req.events.id);
//     var first = req.user.firstname;
//     console.log(first);
//     var last = req.user.lastname;
//     var user_id = req.user.id;

//     db.events.findAll({

//     }).then(function (dbevents) {
//         var events = dbevents;
//         res.render('events', { first: first, last: last, user_id: user_id, events: events});
//     });


//     res.render('events', { first: first, last: last, user_id: user_id });
// }



exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}
