var db = require("../models");
var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render('signup');
}

exports.signin = function (req, res) {
    res.render('signin');
}

exports.event = function (req, res) {
    res.render('event', { first: first, last: last, user_id: user_id });
}

exports.home = function (req, res) {
    var first = req.user.firstname;
    var last = req.user.lastname;
    var user_id = req.user.id;
    db.events.findAll({}).then(function (dbevents) {
        console.log("runnningesiogndfndf");
        //res.json(dbevents);

        var events = dbevents;
        console.log(first);
        console.log(last);
        console.log(user_id);
        console.log(events);
        res.render('home', { first: first, last: last, user_id: user_id, events: events});
    });
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}