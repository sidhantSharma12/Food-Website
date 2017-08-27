import React, { Component } from 'react';
import Home from './Home.jsx';
import Address from './Address.jsx';
import Registration from './Registration.jsx';
import Registration3 from './Registration3.jsx';
import SignIn from './SignIn.jsx';
import { Switch, Route, Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
		    <Switch>
			    <Route exact path='/' component={Home}/>
			    <Route exact path='/address' component={Address}/>
			    <Route exact path='/registration' component={Registration}/>
			    <Route exact path='/registration3' component={Registration3}/>
			    <Route exact path='/signin' component={SignIn}/>
		    </Switch>
      
    );
  }
}

export default Main;