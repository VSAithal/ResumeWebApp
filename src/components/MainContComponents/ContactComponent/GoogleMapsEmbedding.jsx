import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const DivReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "140px", width: "100%" }}>
        <GoogleMapReact
          // API key
          bootstrapURLKeys={{ key: "AIzaSyCrHZlSQkhpQcc01JNoq39MxtGE-I-6vDQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <DivReactComponent
            // Your required location
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
