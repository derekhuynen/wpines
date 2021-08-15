import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


function Map2(props){
    return (
        <Map google={props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );


}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAP_KEY)
})(Map2)