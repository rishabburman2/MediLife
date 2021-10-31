import React, { useState, useEffect } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./PlaceRow";
import styles from "./styles";

import { useNavigation } from '@react-navigation/native'

const SearchScreen = (props) => {

    const navigation = useNavigation();

    const homePlace = {
        description: 'Home',
        geometry: {
            location: {
                lat: 28.451627,
                lng: -16.273045,
            }
        }
    };

    const workPlace = {
        description: 'Work',
        geometry: {
            location: {
                lat: 48.8152937,
                lng: 2.4597668,
            }
        }
    };

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace) {
            navigation.navigate('Result', {
                originPlace,
            })
        }
    }, [originPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Pickup'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                    }}
                    currentLocation={true}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyC4VLS0VlTuOnNZly5449Oz3WIa8wYFsW4',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    enablePoweredByContainer={false}
                    predefinedPlaces={[homePlace, workPlace]}
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;