import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

function Home() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAXHUF9yi8G6qfdJNwGDBw0wcHD3zSudTw'
  })(MapContainer);