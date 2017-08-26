import React, { Component } from 'react';
import Home from './Home.jsx';
import Address from './Address.jsx';
import { Switch, Route, Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
    	
		    <Switch>
			    <Route exact path='/' component={Home}/>
			    <Route path='/address' component={Address}/>
		    </Switch>
      
    );
  }
}

export default Main;