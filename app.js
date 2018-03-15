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

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

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

app.get("/createEvent", isLoggedIn, function(req, res){

    res.render("createEvent");
});

//LOGIN ROUTES

app.get("/login", function (req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/createEvent",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});




