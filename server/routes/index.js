var express = require('express');
var router = express.Router();

var ctrlAuth = require('../controllers/authentication');
var ctrlFood = require('../controllers/food');
var location = require('../controllers/location');

/* GET home page. */
router.get('/hello', ctrlAuth.hello);
router.post('/register', ctrlAuth.register);
router.post('/auth', ctrlAuth.authenticate);
router.post('/cuisines', ctrlFood.updateCuisine);
router.post('/findClosest', location.findClosest);
router.post('/location', location.storeAddress);

module.exports = router;
