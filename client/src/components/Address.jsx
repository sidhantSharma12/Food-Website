import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/address.css';

class Address extends Component {

  render() {
    return (
    	
		    <div className="address"> 
		    	<div className="container">
					<input className="input" placeholder="What's your address?"/>
					<div>
						<h1 className="find">This allows us to find people close to you who are cooking food for you to eat!</h1>
					</div>
					<div className="submit-button">
						<Link to={`/`} activeClassName="active" className="submit">SUBMIT</Link>
					</div>
		    	</div>
		     </div>
      
    );
  }
}

export default Address;