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
            spots: Array(1).fill(null)
        };
        fetch('/api/findClosest', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                distance: {
                    lat: localStorage.getItem("lat"),
                    lng: localStorage.getItem("lng")
                },
                radius: 5
            })
        }).then(res => res.json())
            //.then(arr => this.setState(console.log(arr)));
            .then(arr => this.setState({ spots: arr.arr }));

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
        //var marks = this.state.spots.map(function(e){
        return (
            <div>
                <div>
                    <Map google={this.props.google}
                         onClick={this.onMapClicked}
                         initialCenter={{
                            lat: 43.6632012,
                            lng: -79.41060929999999
                        }}
                    >

                        <Marker name={'Current location'}
                                position={{
                            lat: 43.6500015,
                            lng: -79.41060929999999
                        }}/>

                        <Marker name={'Current location'}
                                position={{
                            lat: 43.6632012,
                            lng: -79.40060929999999
                        }}/>

                        <Marker name={'Current location'}
                                position={{
                            lat: 43.67,
                            lng: -79.41060929999999
                        }}/>

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