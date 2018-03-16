var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.home = function(req, res) {
    var first = req.user.firstname; 
    var last = req.user.lastname;
    console.log(first);
    console.log(last);
    res.render('home', {first: first, last: last});
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}