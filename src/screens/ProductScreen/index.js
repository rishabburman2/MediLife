import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import product from "../../assets/data/product";
import QuantitySelector from "../../components/QuantitySelector";
import ProductButton from "../../components/ProductButton";
import ImageCarousel from "../../components/ImageCarousel";

const ProductScreen = (props) => {
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    console.log(route.params);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
            {/* Price */}
            <Text style={{ color: '#000', fontSize: 16, fontWeight: '800', marginVertical: 8 }}>MRP: ₹{product.price}
                <Text> </Text>
                {product.oldPrice && (<Text style={{ fontSize: 13, fontWeight: 'normal', textDecorationLine: 'line-through' }}>₹{product.oldPrice}</Text>)}
            </Text>
            {/* Intro */}
            <Text style={styles.info}>{product.introduction}</Text>
            {/* Amount */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            {/* Buttons */}
            <ProductButton text={'Add To Cart'} onPress={() => { }} />
            <View style={{ height: 15 }}></View>
        </ScrollView>
    );
};

export default ProductScreen;