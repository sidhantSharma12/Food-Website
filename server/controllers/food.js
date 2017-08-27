var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.updateCuisine = function (req, res) {
    User.findOne({'email' : req.body.email}, function (err, user) {
        if (err) {
            res.status(400).json({'error' : err});
        } else if (!user){
            res.status(404).json({'err' : "User doesn't exist"});
        } else {
            user.cuisines = req.body.cuisines;
            user.save(function (err) {
                if (err) {
                    res.status(400).json({err:err})
                }
                else {
                    res.status(200).json({'message': 'Updated User'});
                }
            });
        }
    });
};



