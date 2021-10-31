import React from "react";
import { View, Text, Alert, Linking } from "react-native";
import Ambulance from "../../components/Ambulance";
import ResultScreenMap from "../../components/ResultScreenMap";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createBooking } from '../../graphql/mutations';

import { useRoute } from "@react-navigation/native";

const SearchResultScreen = (props) => {

    const route = useRoute();
    console.log(route.params);

    const { originPlace } = route.params;

    const onSubmit = async () => {
        try {
            const user_info = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                userId: user_info.attributes.sub,

                ambId: "1",
                ambNumber: " ",
                ambCall: " ",

                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,
            }
            console.log(input);

            const response = await API.graphql(
                graphqlOperation(
                    createBooking, {
                    input: input
                },
                )
            )
            Alert.alert(
                'Boking Confirmed',
                'Call Driver: 8447922589',
                [{
                    text: "Call",
                    onPress: () => Linking.openURL(`tel:8447922589`)
                }],
            )
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View>
            <View style={{ height: '60%' }}>
                <ResultScreenMap origin={originPlace} />
            </View>
            <View tyle={{ height: '40%' }}>
                <Ambulance onSubmit={onSubmit} />
            </View>
        </View>
    );
};

export default SearchResultScreen;