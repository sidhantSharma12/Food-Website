var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.hello = function (req, res) {
    console.log('hello world');
    res.status(200).json('{ test: worked }');
    return
};

module.exports.register = function (req, res) {
    var newUser = new User();

    newUser.username = req.body.username;
    newUser.password = req.body.password;

    // save the user
    newUser.save(function(err) {
        if (err) {
            res.status(400).json("{error: " + err + "}");
            throw err;
        } else {
            res.status(201).json("{message: new user created}");
        }
    });

};
