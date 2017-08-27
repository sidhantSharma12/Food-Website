import React, { Component, Button } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/home.css';

class Home extends Component {

  render() {
    return (
		    <div>
                <div>
                    <ul className="login">
                        <li>
                            <Link to={'/signin'} activeClassName="active" className="in">Sign in</Link>
                        </li>
                        <li>
                            <div className="verticalLine">
                                <Link to={'/'} activeClassName="active" className="up">Sign up</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="description">A quick and easy way to get delicious, homecooked food.</h1>
                </div>
                <div className="buttons">
                    <div className="want-button">
                        <Link to={'/address'} activeClassName="active" className="want">I WANT FOOD</Link>
                    </div>
                    <div className="sell-button">
                        <Link to={'/registration'} activeClassName="active" className="sell">I SELL FOOD</Link>
                    </div>
                </div>
            </div>
    );
  }
}

export default Home;