import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import product from "../../assets/data/product";

const ProductScreen = (props) => {
    const [] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}

            {/* Price */}
            <Text style={{ color: '#000', fontSize: 16, fontWeight: '800', marginVertical: 8 }}>MRP: ₹{product.price}
                <Text> </Text>
                {product.oldPrice && (<Text style={{ fontSize: 13, fontWeight: 'normal', textDecorationLine: 'line-through' }}>₹{product.oldPrice}</Text>)}
            </Text>
            {/* Intro */}
            <Text style={styles.info}>{product.introduction}</Text>
            {/* Amount */}

            {/* Buttons */}
        </View>
    );
};

export default ProductScreen;