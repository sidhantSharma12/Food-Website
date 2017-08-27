var mongoose = require('mongoose');
var User = mongoose.model('User');
var http = require('https');

module.exports.findClosest = function (req, res) {//assuming req.body.address in lat and long and req.body.maxDistance
	var acceptedChefs=[];
	
	User.find({}, function (err, cooks) {
        if (err) {
            res.status(400).json({'error' : err});
        }
        else if (!cooks){
            res.status(404).json({'err' : "No cooks doesn't exist"});
        }
        else {
        	
        	cooks.map((item) => {
        		var httpString= 'https://maps.googleapis.com//maps/api/distancematrix/json?units=imperial&origins=' + req.body.lat + ',' + req.body.lng + '&destinations=' + item.location.lat + '%2C' + item.location.lng + '&key=AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk';
        		http.get(httpString, function(resp){
        			resp.on('data', function(chunk){
        				if((parseInt(JSON.parse(chunk).rows[0].elements[0].distance.text.split(' ')[0]) * 1.6) <= req.body.radius){
	     				 	acceptedChefs.push(item);
        				}
        			});
        			
        		});           
    		});
    		res.status(200).json({arr : acceptedChefs});
        }
    });	
/*		
	http.get('https://maps.googleapis.com//maps/api/distancematrix/json?units=imperial&origins=43.684043,-79.56571&destinations=43.563367%2C-79.701386%7C43.547876%2C-79.718824&key=AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk', function(resp){
	  resp.on('data', function(chunk){
	     res.send(chunk);
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	  res.send('error');
	});*/
};

module.exports.storeAddress= function(req, res){
	 User.findOne({'email' : req.body.email}, function (err, user) {
        if (err) {
            res.status(400).json({'error' : err});
        } else if (!user){
            res.status(404).json({'err' : "User doesn't exist"});
        } else {
            console.log(user);
        	user.location.lat = req.body.lat;
            user.location.lng = req.body.lng;
            user.save(function (err) {
                if (err) {
                    res.status(400).json({err:err});
                }
                else {
                    res.status(200).json({'message': 'Updated User'});
                }
            });
        }
    });
}


//AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk