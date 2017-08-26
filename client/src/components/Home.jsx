import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Image from '../images/address.png'

import '../css/home.css';
//import '../images/address.png'

class Home extends Component {

   // function dirButton(props) {
        
   // }

  render() {
    return (
    	
		    <div className="home">
                <img src={Image} />
            </div>
    );
  }
}

export default Home;