import React, { useState } from 'react';
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";
import CenterButton from '../CenterButton/CenterButton';

interface MapProps {
	mapboxToken: string;
}

function Maps(props: MapProps): JSX.Element {

    return (
    <div className='Map'>
      <Map
        mapboxAccessToken={props.mapboxToken}
        initialViewState={{
          longitude: 34.855499,
          latitude: 32.109333,
          zoom: 9,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
      </Map>
      <CenterButton/>
    </div>
    );
}

export default Maps;
