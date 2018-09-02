import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ Icon }) => <div>{Icon}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.5980072,
      lng: -101.9393905
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB-4L1PU4leC0mzEtL2RvqNlE7skrC-iok' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            <AnyReactComponent
            lat={33.5980072}
            lng={-101.9393905}
            Icon= {<Icon name='marker' size='huge' color='orange'/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;