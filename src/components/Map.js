import React from 'react'
import GoogleMapReact from 'google-map-react'


const Map = ({center, zoom}) => {

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCPnD2rgmnentLL6PxjFr8oa9tMEatF0Mg'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 34.238815,
        lng: -116.88877
    },
    zoom: 15
}

export default Map