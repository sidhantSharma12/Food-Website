import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/registration3.css';

class Registration3 extends Component {

  render() {
    return (
    	
		    <div className="registration3"> 
		    	<div className="header"> Sign up in seconds</div>
				<hr className="line"/>
		    	<div className="inputName">Home Address</div>
		    	<input className="inputBox"/>
		    	<div className="note">ie. where will you be cooking?</div>

				<div className="inputName">Enter Availability in Calendar</div>
		    	<div className="note">ie. when will you be cooking?</div>
				<div className="input-data">
					
					<div className="input-button">
						<Link to={`/`} activeClassName="active" className="input-text">Input Data</Link>
					</div>
				</div>
				<div className="note">Yes, you can do this part later if you are in a rush.</div>

				<div className="next-button">
					<Link to={`/`} activeClassName="active" className="next">NEXT</Link>
				</div>
		     </div>
      
    );
  }
}

export default Registration3;