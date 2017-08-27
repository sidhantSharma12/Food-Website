import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/signin.css';

class SignIn extends Component {

  render() {
    return (
    	
		    <div className="signin"> 
		    	<div className="header"> Welcome Back!</div>
				<hr className="line"/>
		    	<div className="inputName">Username (Email)</div>
		    	<input className="inputBox"/>
		    	<div className="inputName">Password</div>
				<input className="inputBox"/>
		    	<div className="inputName">Forgot Password</div>
				<div className="next-button">
					<Link to={'/'} activeClassName="active" className="next">SIGN IN</Link>
				</div>
		     </div>
      
    );
  }
}

export default SignIn;