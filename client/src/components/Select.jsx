import React, { Component, Text } from 'react';
//import GoogleMapReact from "google-map-react";
import { Switch, Route, Link } from 'react-router-dom';

import '../css/select.css';


class Select extends Component {

    render() {
        return (
            <div>
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="Search..."
                        />
                        <select>
                            <option value="Cuisine">Volvo</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <li>RADIUS within <input type="text"/> KM</li>
                        <li>PRICE <input type="text"/> to <input type="text"/></li>
                    </form>
                </div>
                <div>
                    <h1>
                        Order delicious home cooked food from your neighbours.
                    </h1>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Select;