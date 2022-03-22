import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '217px',
};

const center = {
  lat: 49.055244,
  lng: 20.297075,
};

const markers = [
  {
    id: 1,
    name: 'Vordent AMB s. r. o.',
    position: { lat: 49.056513, lng: 20.309524 },
  },
  {
    id: 2,
    name: 'Aesculap dent, s.r.o.',
    position: { lat: 49.052833, lng: 20.288752 },
  },
];

export const MapComponent = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA_HEtDGYs05Pta367GzScQ5jK6N5b9YcU',
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const [map, setMap] = useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onLoad = (marker) => {
    marker.setIcon();
  };
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onUnmount={onUnmount}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}

        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    )
  );
};
