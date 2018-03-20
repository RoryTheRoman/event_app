var db = require("../models");
var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render('signup');
}

exports.signin = function (req, res) {
    res.render('signin');
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
        res.render('events', { first: first, last: last, event: event});
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

// exports.events = function (req, res) {
//     console.log("lookkkkkkkk");
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

exports.home = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    db.events.findAll({}).then(function (dbevents) {
        var events = dbevents;
        res.render('home', { first: first, last: last, user_id: user_id, events: events});
    });
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}