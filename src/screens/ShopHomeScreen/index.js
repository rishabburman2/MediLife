import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { color } from "react-native-reanimated";
import ProductItem from "../../components/ProductItem";
import styles from "./styles";
import products from "../../assets/data/products";
import ProductScreen from "../ProductScreen";
import CartScreen from "../CartScreen";
import AddressScreen from "../AddressScreen";
import Entypo from "react-native-vector-icons/Entypo";

const ShopHomeScreen = () => {
    const [search, setSearch] = useState('')
    console.log(search)
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: "#d24e5e", fontSize: 26, fontWeight: 'bold' }}>SHOP</Text>
            </View>
            <View style={{ justifyContent: "center", flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <Entypo name='magnifying-glass' color='#c24e5e' size={25} />
                <TextInput style={styles.input} placeholder="Search for Medicines" value={search} onChangeText={setSearch}></TextInput>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View >
    );
};

export default ShopHomeScreen;