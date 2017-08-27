var express = require('express');
var router = express.Router();

var ctrlAuth = require('../controllers/authentication');
var location = require('../controllers/location');

/* GET home page. */
router.get('/hello', ctrlAuth.hello);
router.post('/register', ctrlAuth.register);
router.post('/auth', ctrlAuth.authenticate);
router.get('/location', location.findClosest);

module.exports = router;
