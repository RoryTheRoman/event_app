var authController = require('../controllers/authController.js');
 
module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/home',
            failureRedirect: '/signup'
        }
    ));
    app.get('/home', isLoggedIn, authController.home);

    app.get('/create', isLoggedIn, authController.create);
    // app.get('/events', isLoggedIn, authController.events);

    app.get('/events/:id', isLoggedIn, authController.oneEvent);

    app.delete('/events/:id', isLoggedIn, authController.delete);

    app.get('/logout', authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/home',
            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}