var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.hello = function (req, res) {
    console.log('hello world');
    res.status(200).json('{ test: worked }');
};

module.exports.register = function (req, res) {
    var newUser = new User();

    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.cuisines = [];
    newUser.location.lat = "";
    newUser.location.lng = "";

    // save the user
    newUser.save(function(err) {
        if (err) {
            res.status(400).json({'error': err });
            throw err;
        } else {
            res.status(201).json({'message': 'new user created'});
        }
    });

};

module.exports.authenticate = function (req, res) {
    User.findOne({'email' : req.body.email}, function (err, user) {
        if (err) {
            res.status(400).json({'error' : err});
        }
        else if (!user){
            res.status(404).json({'err' : "User doesn't exist"});
        }
        else if (req.body.password !== user.password) {
            res.status(401).json({'error' : 'Incorrect password'});
        }
        else {
            res.status(200).json({'message': 'Validated User'});
        }
    });
};


