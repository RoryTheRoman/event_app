var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require ("body-parser"),
    User                    = require("./models/user"),
    localStrategy           = require ("passport-local"),
    passportLocalMongoose   = require ("passport-local-mongoose");

mongoose.connect('mongodb://localhost/auth_page');

var PORT = 3000;
var app = express();

app.use(require("express-session")({
    secret: "event application",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//======== 
// ROUTES
//======== 

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/createEvent");
        });
    });
});

app.get("/createEvent", function(req, res){
    res.render("createEvent");
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });




