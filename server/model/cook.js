var mongoose = require('mongoose');

var cookSchema = new mongoose.Schema({
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
    	type: String
    }
});

module.exports = mongoose.model('Cook', cookSchema);