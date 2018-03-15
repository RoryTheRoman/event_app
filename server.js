var express                 = require("express"),
    app                     = express(),
    passport                = require("passport"),
    session                 = require('express-session'),
    bodyParser              = require("body-parser"),
    env                     = require("dotenv"),
    localStrategy           = require("passport-local"),
    path                    = require("path"),
    exphbs                  = require("express-handlebars");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 
app.get("/", function(req, res) {
    res.send("index");
});

var models = require("./models");
var authRoute = require('./routes/auth.js')(app, passport);
console.log(models);
require('./config/passport/passport.js')(passport, models.user);

models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
 
});


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});