import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';




import '../css/registration.css';

class Registration extends Component {

  render() {
    return (
    	
		    <div className="registration"> 
		    	<div className="header"> Sign up in seconds</div>
		    	<div className="inputName">Name</div>
		    	<input/>
		    	<div className="inputName">Email*</div>
		    	<input/>
		    	<div className="inputName">Password</div>
		    	<input/>

		    	<button> Next</button>
		     </div>
      
    );
  }
}

export default Registration;