import React from "react";
import { View, Text, FlatList } from "react-native";
import { color } from "react-native-reanimated";
import ProductItem from "../../components/ProductItem";
import styles from "./styles";
import products from "../../assets/data/products";
import ProductScreen from "../ProductScreen";

const ShopHomeScreen = () => {
    return (
        // <View style={styles.container}>
        //     <View style={{ alignItems: 'center' }}>
        //         <Text style={{ color: "#d24e5e", fontSize: 26, fontWeight: 'bold' }}>SHOP</Text>
        //     </View>
        //     <FlatList
        //         data={products}
        //         renderItem={({ item }) => <ProductItem item={item} />}
        //         showsVerticalScrollIndicator={false}
        //     />
        // </View >
        <View>
            <ProductScreen />
        </View>
    );
};

export default ShopHomeScreen;