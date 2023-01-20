import { useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Mapp({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewPort] = useState({
      width: '100%',
      height: '100%',
      longitude: center.longitude,
      latitude: center.latitude, 
      zoom: 11,
  });

  return <Map
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/addips/cld300m5f003601qlqmsf7xc9"
    mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
    {...viewport}
    onViewportChange={(nextViewport) => setViewPort(nextViewport)}
  >
    {searchResults.map(result => (
      <div key={result.long}>
        <Marker 
          longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}
        >
          <p
          role='image'
          onClick={() => setSelectedLocation(result)}
          className='cursor-pointer text-2xl animate-bounce'
          aria-label='push pin'>
          📌
          </p>
        </Marker>

        {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})} 
            closeOnClick={true}
            latitude={result.lat} longitude={result.long}
          >
            {result.title}
          </Popup>
        ): (
          false
        )}
      </div>
    ))}
  </Map>
}
export default Mapp;

