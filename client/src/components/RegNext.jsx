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
                    <h1>
                        Sign up in seconds
                    </h1>
                </div>
                <div>
                    <h6 className="cooking">
                        What type of cuisine do you enjoy cooking?
                    </h6>
                    <ul>
                        {['British',
                            'American',
                        'Carribbean',
                        'Mexican',
                        'Chinese',
                        'French',
                        'Moroccan',
                        'Spanish',
                        'Greek',
                        'Thai'].map(function(name, i) {
                            return <li>
                                <Food value={i}
                                      selected={this.state.selected[i]}
                                      onClick={() => this.handleClick(i)}
                                />
                                <p>{name}</p>
                            </li>;
                        }, this)};
                    </ul>
                    <ul>
                        {['Indian',
                        'Turkish',
                        'Italian',
                        'Japanese',
                        'Vietnamese',
                        'Mediterranean'].map(function(name, i){
                            return <li>
                                <Food value={i}
                                      selected={this.state.selected[i]}
                                      onClick={() => this.handleClick(i)}
                                />
                                <p>{name}</p>
                            </li>;
                        }, this)}
                    </ul>
                    <p>
                        Click the images above to select cuisines you want to cook.
                    </p>
                </div>
                <div>
                    <div className="sell-button">
                        <Link to={`/`} activeClassName="active" className="sell">ALMOST THERE!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegNext;
