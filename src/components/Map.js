import React from 'react'
import GoogleMapReact from 'google-map-react'


const Map = ({center, zoom}) => {

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
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