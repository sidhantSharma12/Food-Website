var mongoose = require('mongoose');
var User = mongoose.model('User');
var Cook = mongoose.model('Cook');
var http = require('https');

module.exports.findClosest = function (req, res) {//assuming req.body.address in lat and long and req.body.maxDistance

	var httpString= 'https://maps.googleapis.com//maps/api/distancematrix/json?units=imperial&origins=';
	Cook.find({}, function (err, cooks) {
        if (err) {
            res.status(400).json({'error' : err});
        }
        else if (!cooks){
            res.status(404).json({'err' : "No cooks doesn't exist"});
        }
        else {
        	var closeByCooks=[];

        	cooks.map(function(x) {
			    
			});

            res.status(200).json({'message': 'Validated User'});
        }
    });


	http.get('https://maps.googleapis.com//maps/api/distancematrix/json?units=imperial&origins=43.684043,-79.56571&destinations=43.563367%2C-79.701386%7C43.547876%2C-79.718824&key=AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk', function(resp){
	  resp.on('data', function(chunk){
	     res.send(chunk);
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	  res.send('error');
	});
};


//AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk