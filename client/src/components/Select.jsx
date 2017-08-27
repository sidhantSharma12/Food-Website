import React, { Component, Text } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/select.css';


class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

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
                            <option value="Cuisine">Cuisine</option>
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
                    <Map google={this.props.google}
                         onClick={this.onMapClicked}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDxL4NAv1bO7f9ofa_nl_zt2sEzG67I5Pk')
})(Select)