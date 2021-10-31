import React, { useState } from "react";
import { Text, View, TextInput, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import countryList from "country-list";
import styles from "./styles";
import ProductButton from "../../components/ProductButton";

const AddressScreen = () => {

    const countries = countryList.getData();
    const [country, setCountry] = useState('Unknown')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [yourState, setYourState] = useState('')
    const [zip, setZip] = useState('')


    const onCheckout = () => {
        if (!name || !phone || !address || !city || !yourState || !zip || country === 'Unknown') {
            Alert.alert("Please enter all details");
            return;
        }
        console.warn('Success')
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={setCountry}
                        mode="dropdown"
                        style={styles.picker}
                    >
                        <Picker.Item label="Please select your country" value="Unknown" />
                        {countries.map(country => (
                            <Picker.Item label={country.name} value={country.code} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} placeholder="Enter name" value={name} onChangeText={setName} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={"phone-pad"}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input1} placeholder="Address Line 1" value={address} onChangeText={setAddress} />
                    <TextInput style={styles.input2} placeholder="Address Line 2" value={address2} onChangeText={setAddress2} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} placeholder="Enter City" value={city} onChangeText={setCity} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>State</Text>
                    <TextInput style={styles.input} placeholder="Enter State" value={yourState} onChangeText={setYourState} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder="Enter Zip Code" value={zip} onChangeText={setZip} />
                </View>
                <ProductButton text='Checkout' onPress={onCheckout} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddressScreen;