var express                 = require("express"),
    passport                = require("passport"),
    env                     = require("dotenv"),
    models                  = require("./models"),
    bodyParser              = require("body-parser"),
    session                 = require('express-session'),
    User                    = require("./models/users"),
    localStrategy           = require("passport-local"),
    path                    = require("path"),
    exphbs                  = require("express-handlebars");

var app = express();


var PORT = process.env.PORT || 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


 
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
 
});


app.get("/", function(req, res) {
    res.send("home");
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});