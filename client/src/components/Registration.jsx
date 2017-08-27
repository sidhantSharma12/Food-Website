import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/registration.css';

class Registration extends Component {

  render() {
    return (
    	
		    <div className="registration"> 
		    	<div className="header"> Sign up in seconds</div>
				<hr className="line"/>
		    	<div className="inputName">Name</div>
		    	<input className="inputBox"/>
		    	<div className="inputName">Email*</div>
		    	<input className="inputBox"/>
				<div className="note">*This will be your username too.</div>
		    	<div className="inputName">Password</div>
		    	<input className="inputBox"/>

				<div className="next-button">
					<Link to={`/`} activeClassName="active" className="next">NEXT</Link>
				</div>
		     </div>
      
    );
  }
}

export default Registration;