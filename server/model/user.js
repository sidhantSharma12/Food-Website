var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
    	type: String
    },
    location: {
    	type: Object
    },
    cuisines: {
        type: Array
    }
});

module.exports = mongoose.model('User', userSchema);
