import React, { Component } from 'react';
import Home from './Home.jsx';
import Address from './Address.jsx';
import Registration from './Registration.jsx'
import Registration3 from './Registration3.jsx'
import RegNext from './RegNext'
import Signin from './SignIn.jsx'
import Select from './Select'
import { Switch, Route, Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
		    <Switch>
			    <Route exact path='/' component={Home}/>
			    <Route path='/address' component={Address}/>
			    <Route path='/registration' component={Registration}/>
                <Route path='/registration3' component={Registration3}/>
                <Route path='/signin' component={Signin}/>
                <Route path="/registration2" component={RegNext}/>
                <Route path="/select" component={Select}/>

		    </Switch>
      
    );
  }
}

export default Main;