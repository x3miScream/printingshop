import React from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const shopLocation = {
    lat: 3.119690756822075,
    lng: 101.67750942590236
};

const shopMarkerPosition = {

}

const Map = () => {

    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAGD2tBaod5XcxxAb6I9fqVC1UEBo5cqFk"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(shopLocation);
        map.fitBounds(bounds);
        
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={shopLocation}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
    ) : <></>
};

export default Map;