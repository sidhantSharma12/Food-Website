var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.hello = function (req, res) {
    console.log('hello world');
    res.status(200).json('{ test: worked }');
    return
};
