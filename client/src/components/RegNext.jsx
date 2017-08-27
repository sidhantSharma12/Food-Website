import React, { Component, Text } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/reg-next.css';

function Food(props) {
    if (props.selected) {
        return (
            <img src={require('../images/checkmark.png')} onClick={props.onClick}/>
        )
    } else {
        return (
            <div>
                <img src={require('../images/cuisine' + props.value + '.png')} onClick={props.onClick}/>
            </div>
        )
    }
}

class RegNext extends Component {
    constructor() {
        super();
        this.state = {
            selected: Array(16).fill(false)
        };
    }

    handleClick(index) {
        var s = this.state.selected.slice();
        s[index] = !s[index];
        console.log(s);
        this.setState({selected: s});
    };

    render() {
        return (
            <div className="nextR">
                <div className="heading">
                    <h1 className="header">
                        Sign up in seconds
                    </h1>
                    <hr className="line"/>
                </div>
                <div>
                    <h6 className="cooking">
                        What type of cuisine do you enjoy cooking?
                    </h6>
                    <ul className="row">
                        {['British',
                            'American',
                        'Carribbean',
                        'Mexican',
                        'Chinese',
                        'French',
                        'Moroccan',
                        'Spanish'].map(function(name, i) {
                            return <li className="cuisine">
                                <Food value={i}
                                      selected={this.state.selected[i]}
                                      onClick={() => this.handleClick(i)}
                                />
                                <p className="cuisineName">{name}</p>
                            </li>;
                        }, this)}
                    </ul>
                    <ul className="row">
                        {['Greek',
                            'Thai',
                        'Indian',
                        'Turkish',
                        'Italian',
                        'Japanese',
                        'Vietnamese',
                        'Mediterranean'].map(function(name, i){
                            return <li className="cuisine">
                                <Food value={i + 8}
                                      selected={this.state.selected[i+8]}
                                      onClick={() => this.handleClick(i+8)}
                                />
                                <p className="cuisineName">{name}</p>
                            </li>;
                        }, this)}
                    </ul>
                    <p className="note">
                        Click the images above to select cuisines you want to cook.
                    </p>
                </div>
                <div>
                    <div className="almost-button">
                        <Link to={`/`} activeClassName="active" className="almost">ALMOST THERE!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegNext;
