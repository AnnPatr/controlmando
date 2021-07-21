import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '60%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.props.point.latitud,
            lng: this.props.point.longitud
          }
        }
      >
        <Marker position={{
            lat: this.props.point.latitud,
            lng: this.props.point.longitud
          }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCzfVzY2Of_qsDgZW6fXyQNZaq2u-8yQVc'
})(MapContainer);