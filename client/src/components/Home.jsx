import React, { Component, Button } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/home.css';

class Home extends Component {

  render() {
    return (
		    <div className="containerHome">
                <div>
                    <ul className="login">
                        <li>
                            <Link to={`/`} activeClassName="active" className="in">Sign in</Link>
                        </li>
                        <li>
                            <Link to={`/`} activeClassName="active" className="up">Sign up</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>A quick and easy way to get delicious, homecooked food.</h1>
                </div>
                <div>
                    <div>
                        <Link to={`/`} activeClassName="active" className="want">I WANT FOOD</Link>
                    </div>
                    <div>
                        <Link to={`/`} activeClassName="active" className="sell">I SELL FOOD</Link>
                    </div>
                </div>
            </div>
    );
  }
}

export default Home;