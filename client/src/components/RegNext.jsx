import React, { Component, Text } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import '../css/reg-next.css';

function Food(props) {
    if (props.selected) {
        return (
            <img className="check" src={require('../images/checkmark.png')} onClick={props.onClick}/>
        )
    } else {
        return (
            <div>
                <img className="foodPic" src={require('../images/cuisine' + props.value + '.png')} onClick={props.onClick}/>
            </div>
        )
    }
}

class RegNext extends Component {
    constructor() {
        super();
        this.state = {
            selected: Array(16).fill(false),
            cuisines: Array(),
             redirect:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(index, type) {
        var s = this.state.selected.slice();
        s[index] = !s[index];
        var c = this.state.cuisines.slice();
        if (s[index]){
            c.push(type);
        } else {
            var index = c.indexOf(type);
            if (index > -1) {
                c.splice(index, 1);
            }
        }
        this.setState({selected: s, cuisines: c});
    };

    handleSubmit() {
        var email = localStorage.getItem('email');
        fetch('/api/cuisines', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                cuisines: this.state.cuisines
            })
        })
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
    return <Redirect push to="/registration3" />;
    }
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
                                      onClick={() => this.handleClick(i, name)}
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
                                      onClick={() => this.handleClick(i+8, name)}
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
                        <button className="almost" onClick={this.handleSubmit}>ALMOST THERE!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegNext;
