import React, { Component, Button } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/select.css';

class Select extends Component {

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </form>
            </div>
            <div>
        );
    }
}

export default Select;