import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Image from '../images/address.png'



import '../css/address.css';

class Address extends Component {

  render() {
    return (
    	
		    <div className="address"> 
		    	<div className="container">
		    		<input/>
		    		This allows us to find people close to you who are cooking food for you to eat!
		    		<button> SUBMIT </button>
		    	</div>
		     </div>
      
    );
  }
}

export default Address;