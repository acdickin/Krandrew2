import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const	lat=47.476015,	lng=-120.376552;


const params = {v: '3.exp', key: 'AIzaSyAmrU8MDXxK6pPjbKVacqnFpIlUTO7wouQ'};

class GoogleMap extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    return (
      <div id="map">
  			<Gmaps className="maps"
  				lat={lat}
  				lng={lng}
  				zoom={10}
  				loadingMessage={'Maps loading'}
  				params={params}
  				onMapCreated={this.onMapCreated}>
  				<Marker
  					lat={lat}
  					lng={lng}
  					draggable={true}
  					onDragEnd={this.onDragEnd} />
  				<InfoWindow
  					lat={lat}
  					lng={lng}
  					content={'Warm Spring Inn and Winery'}
  					onCloseClick={this.onCloseClick} />
  				<Circle
  					lat={lat}
  					lng={lng}
  					radius={300}
  					onClick={this.onClick} />
  			</Gmaps>
      </div>
  	);
  }
};

export default GoogleMap ;
