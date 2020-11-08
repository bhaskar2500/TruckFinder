import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{"border":"1px solid red","width":"40px"}}>  {text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 27.02,
      lng: 74.21
    },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC1JWd1SeBzAC68ESzEyJ7oIVVKSAU7J0g" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={27.02}
            lng={74.21}
            text="GO HERE"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;