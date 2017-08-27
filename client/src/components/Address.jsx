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
  }

   handleChange(event) {
    this.setState({value1: event.target.value});
  }

   handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  sendData(){

  	var geocoder = require('geocoder');
 
	// Geocoding 
	geocoder.geocode(this.state.value1, function ( err, data ) {
	   fetch('/api/location', {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    distance: {
			    lat:data.results[0].geometry.location.lat,
			    lng:data.results[0].geometry.location.lng 	
		    },
		    radius: this.state.value2
		  })
		});
  	});
  }

  render() {
    return (
    	
		    <div className="address"> 
		    	<div className="container">
					<input className="input" placeholder="What's your address?" type="text" value={this.state.value1} onChange={this.handleChange}/>
					<input className="input2" type="text" value={this.state.value2} onChange={this.handleChange2}/>
					<div>
						<h1 className="find">This allows us to find people close to you who are cooking food for you to eat!</h1>
					</div>
					<div className="submit-button">
						<button onClick={this.sendData.bind(this)} className="submit">SUBMIT</button>
					</div>
		    	</div>
		     </div>
      
    );
  }
}

export default Address;