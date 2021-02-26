
// import React from "react";
// import ReactDOM from "react-dom";
// //import { DirectionsRenderer } from "react-google-maps";
// import { compose, withProps, lifecycle } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,

// } from "react-google-maps";

// //const google=window.google
// //import { DirectionsRenderer } from "react-google-maps";

// const Map = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `515px` }} ></div>,
//     containerElement: <div style={{ height: `515px` }}  />,
//     mapElement: <div style={{ height: `515px` }} />,
    
//   }),
//   withScriptjs,
//   withGoogleMap,
  
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();
//         const props={latitude:"12.9716"}
//       DirectionsService.route(
//         {
//           origin: new google.maps.LatLng(props["latitude"], 77.5946),
//           destination: new google.maps.LatLng(13.0827, 80.2707),
//           travelMode: google.maps.TravelMode.DRIVING
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   })
// )(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
     
//     {props && props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));

// export default Map;
/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class Map extends Component {

    constructor(props)
    {
        super(props)
    }
    state = {
        directions: null
      };
  

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    
    console.log("Hello",this.props.lat)
//     1)	Bengaluru		12.9716	77.5946
// 2)	Chennai		13.0827	80.2707
    const origin = { lat: Number(this.props.lat), lng: Number(this.props.long) };
    const destination = { lat:Number(this.props.lat1), lng: Number(this.props.long1) };
    
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    )
    
  }

  render() {
    // this.props.onLoad(google)
    
    const GoogleMapExample = withGoogleMap(props => (
      
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
          
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
  
    ));

    return (
      <div>
        <GoogleMapExample
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places"
         loadingElement={<div style={{ height: `100%` }}/>}
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;


