var express = require('express');
var router = express.Router();

var ctrlAuth = require('../controllers/authentication');

/* GET home page. */
router.get('/hello', ctrlAuth.hello);
router.post('/register', ctrlAuth.register);
router.post('/auth', ctrlAuth.authenticate);

module.exports = router;
