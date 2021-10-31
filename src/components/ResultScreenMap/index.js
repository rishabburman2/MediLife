import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

const ResultScreenMap = ({ origin }) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyC4VLS0VlTuOnNZly5449Oz3WIa8wYFsW4';

    // const origin = {
    //     latitude: 28.450627,
    //     longitude: -16.263045,
    // }

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    }
    console.log(originLoc)

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    }

    return (
        <MapView
            style={{ height: '110%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>

            <MapViewDirections
                origin={originLoc}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
            <Marker
                coordinate={originLoc}
                title={"Origin"}
            />
            <Marker
                coordinate={destination}
                title={"Destination"}
            />
        </MapView>
    );
};

export default ResultScreenMap;