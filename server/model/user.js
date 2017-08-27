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
    	lat: {
           type: String
        },
        lng: {
            type: String
        }
    },
    cuisines: {
        type: Array
    }
});

module.exports = mongoose.model('User', userSchema);
