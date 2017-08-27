import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/registration3.css';

class Registration3 extends Component {

  render() {
    return (
    	
		    <div className="registration3"> 
		    	<div className="header"> Sign up in seconds</div>
				<hr className="line"/>
		    	<div className="homeAddress">Home Address</div>
		    	<input className="inputBox"/>
		    	<div className="underInput">ie. where will you be cooking?</div>

				<div className="availability">Enter Availability in Calendar</div>
		    	<div className="underAvailability">ie. when will you be cooking?</div>
		    	<input className="inputBox"/>
				<div className="next-button">
					<Link to={`/`} activeClassName="active" className="next">NEXT</Link>
				</div>
		     </div>
      
    );
  }
}

export default Registration3;