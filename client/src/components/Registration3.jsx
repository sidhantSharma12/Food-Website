import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Image from '../images/calendar.png'
import { Redirect } from 'react-router';

import '../css/registration3.css';

class Registration3 extends Component {

	constructor(props) {
		super(props);
		this.state = {address: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({address: event.target.value, redirect:false});
	}

	handleClick(){

		var geocoder = require('geocoder');
		var that=this;

		geocoder.geocode(this.state.address, function ( err, data ) {

			fetch('/api/location', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					lat: data.results[0].geometry.location.lat,
					lng: data.results[0].geometry.location.lng,
					email: localStorage.getItem("email")
				})
			}).then(function(){
				that.setState({redirect: true});
			})
		});
		
	}

  render() {
  	if (this.state.redirect) {
    return <Redirect push to="/" />;
    }
    return (
    	
		    <div className="registration3"> 
		    	<div className="header"> Sign up in seconds</div>
				<hr className="line"/>
		    	<div className="inputName">Home Address</div>
		    	<input className="inputBox" value={this.state.address} onChange={this.handleChange}/>
		    	<div className="note">ie. where will you be cooking?</div>

				<div className="inputName">Enter Availability in Calendar</div>
		    	<div className="note">ie. when will you be cooking?</div>
				<div className="input-data">
					<img className="calendarIcon" src={Image} height={32} width={32}/>
					<div className="input-button">
						<Link to={`/`} activeClassName="active" className="input-text">Input Data</Link>
					</div>
				</div>
				<div className="note">Yes, you can do this part later if you are in a rush.</div>


				<div className="next-button">
					<button onClick={this.handleClick} className="next-button1">DONE</button>
				</div>
		     </div>
      
    );
  }
}

export default Registration3;