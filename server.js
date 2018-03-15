var express                 = require("express"),
    passport                = require("passport"),
    models                  = require("./models");
    bodyParser              = require ("body-parser"),
    session                 = require('express-session'),
    User                    = require("./models/users"),
    localStrategy           = require ("passport-local"),
    path                    = require("path"),
    app                     = express();

var PORT = process.env.PORT || 3000;

require('dotenv');

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


app.get("/", function(req, res) {
    res.send("home");
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});