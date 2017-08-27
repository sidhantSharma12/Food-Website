import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/signin.css';

class SignIn extends Component {

  render() {
    return (
    	
		    <div className="signin"> 
		    	<div className="header"> Welcome Back!</div>
				<hr className="line"/>
		    	<div className="username">Username (Email)</div>
		    	<input className="usernameInput"/>
		    	<div className="password">Password</div>
				<input className="password"/>
		    	<div className="underAvailability">Forgot Password</div>
				<div className="next-button">
					<Link to={'/'} activeClassName="active" className="next">NEXT</Link>
				</div>
		     </div>
      
    );
  }
}

export default SignIn;