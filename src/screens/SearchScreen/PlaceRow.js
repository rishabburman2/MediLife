import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import Entypo from "react-native-vector-icons/Entypo";

const PlaceRow = ({ data }) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home'
                    ? <Entypo name='home' size={18} color="white" />
                    : data.description === 'Work'
                        ? <Entypo name='suitcase' size={17} color="white" />
                        : <Entypo name='location-pin' size={19} color="white" />}
                {/* <Entypo name='location-pin' size={20} color="white" /> */}
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    );
};

export default PlaceRow;