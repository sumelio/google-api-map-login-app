import _ from "lodash";
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps"; 

const MyMapComponent = compose(
  withProps(props => ({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${props.data.apiKeyGoogle}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
})),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: this.props.data.originAddress,//new google.maps.LatLng(41.8507300, -87.6512600),
        destination: this.props.data.destinationAddress,// new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          console.log("result 1" + result.routes[0].legs[0].distance.text);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <div>
    <div>
      DIBUJO:  {props.directions && <div> {props.directions.routes[0].legs[0].distance.text} </div>}
    </div>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  </div>
);

const enhance = _.identity;

const ReactGoogleMaps = (props) => [
  <MyMapComponent data={props.data} key="map" />
];
export { ReactGoogleMaps as MyGoogleMap };