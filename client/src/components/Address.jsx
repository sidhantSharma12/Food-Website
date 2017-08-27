import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/address.css';

class Address extends Component {

  constructor(props) {
	  super(props);
	  this.state = {
	  				value1: '',
	  				value2: ''
					};
	this.handleChange = this.handleChange.bind(this);
	 this.handleChange2 = this.handleChange2.bind(this);
	 this.sendData = this.sendData.bind(this);
  }

   handleChange(event) {
    this.setState({value1: event.target.value});
  }

   handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  sendData(){
  	var value3= this.state.value2;
  	var geocoder = require('geocoder');
 
	// Geocoding 
	geocoder.geocode(this.state.value1, function ( err, data ) {
		localStorage.setItem('lat', data.results[0].geometry.location.lat);
		localStorage.setItem('lng',data.results[0].geometry.location.lng );
	   fetch('/api/findClosest', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    distance: {
			    lat:data.results[0].geometry.location.lat,
			    lng:data.results[0].geometry.location.lng 	
		    },
		    radius: value3
		  })
		});
  	}.bind(this));
  }

  render() {
    return (
    	
		    <div className="address"> 
		    	<div className="container">
					<input className="input" placeholder="What's your address?" type="text" value={this.state.value1} onChange={this.handleChange}/>
					<div className="findChefInput">
						<h1 className="findChef">Find chefs within</h1>
						<input className="input2" type="text" value={this.state.value2} onChange={this.handleChange2}/>
						<h1 className="findChef">KM of me!</h1>
					</div>
					<div>
						<h1 className="find">This allows us to find people close to you who are cooking food for you to eat!</h1>
					</div>
					<div>
						<button onClick={this.sendData} className="submit-button1">SUBMIT</button>
					</div>
		    	</div>
		     </div>
      
    );
  }
}

export default Address;