import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from './styles.js'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



const Ambulance = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <Text style={{ padding: 15, fontWeight: '700' }}>Your Ambulance is on the way</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/ambulance.png')} />
            </View>

            <View style={styles.bookContainer}>
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 20 }}>10 minutes away</Text>
                    <Text style={{ paddingLeft: 4 }}>DL 9C TJ 9812</Text>
                </View>
                <Pressable onPress={onSubmit}>
                    <MaterialIcons name={"call"} size={25} color={"#000"} />
                </Pressable>
            </View>
        </View>
    );
};

export default Ambulance;