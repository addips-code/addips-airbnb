import { useState } from 'react';
import Map from 'react-map-gl';

function Mapp() {

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        longitude: 37.7577,
        latitude: -122.4376,
        zoom: 11,
    });
  return <Map
    initialViewState={{
    longitude: -100,
    latitude: 40,
    zoom: 3.5
  }}
  style={{width: 600, height: 400}}
  mapStyle="mapbox://styles/addips/cld300m5f003601qlqmsf7xc9"
  mapboxApiAccessToken={process.env.mapbox_key}
/>;
}

export default Mapp;

