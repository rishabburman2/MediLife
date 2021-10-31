
import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable } from "react-native";

import styles from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

// import ambulances from '../../assets/data/ambulances';

import { API, graphqlOperation } from "aws-amplify";
import { listAmbulances, ListAmbulances } from '../../graphql/queries';


const HomeMap = (props) => {

    const [ambulances, setAmbulances] = useState([])

    useEffect(() => {
        const fetchAmbulances = async () => {
            try {
                const response = await API.graphql(
                    graphqlOperation(
                        listAmbulances
                    )
                )
                console.log(response)
                setAmbulances(response.data.listAmbulances.items);
            } catch (e) {
                console.log(e)
            }
        };

        fetchAmbulances();
    }, [])

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search')
    }

    return (
        <View>
            <View style={{ margin: 2, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>MEDILIFE</Text>
            </View>
            <View style={{ margin: 8, height: 650, backgroundColor: "#c24e5e", justifyContent: "center", alignItems: "center" }}>
                <Pressable onPress={goToSearch} style={styles.input}>
                    <EvilIcons name={"location"} size={14} color={"#c24e5e"} />
                    <Text style={styles.inputText}>Current Location</Text>
                </Pressable>
                <View style={styles.hospital}>
                    <Text>Hospitals Near Me</Text>
                </View>
                <MapView
                    style={{ marginTop: '30%', height: '82.7%', width: '100%' }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 28.450627,
                        longitude: -16.263045,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {ambulances.map((ambulance) => (
                        <Marker
                            key={ambulance.id}
                            coordinate={{ latitude: ambulance.latitude, longitude: ambulance.longitude }}
                        >
                            <Image style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: `${ambulance.heading}deg`
                                }]
                            }}
                                source={require('../../assets/images/ambulance.png')} />
                        </Marker>
                    ))}
                </MapView>
                <Pressable onPress={goToSearch} style={styles.find}>
                    <Text style={{ color: 'white' }}>FIND AMBULANCE</Text>
                </Pressable>
            </View>
        </View >
    );
};


export default HomeMap;