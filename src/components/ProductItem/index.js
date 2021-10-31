import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const ProductItem = (props) => {
    const navigation = useNavigation();
    const item = props.item;
    const id = props.item.id
    const onPressed = () => {
        navigation.navigate('Product', { id });
    }
    return (
        <Pressable style={styles.root} onPress={onPressed} >
            <Image style={styles.img} source={item.img} />
            <View style={styles.textContainer}>
                <Text style={{ color: '#fff', fontSize: 18, marginTop: 5 }}>{item.title}</Text>
                <Text style={{ color: '#fff', fontSize: 12, marginBottom: 12 }}>{item.desc}</Text>
                {/* Ratings */}
                <View style={styles.ratings}>
                    {[0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome
                            key={`${item.id}-${i}`}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={11}
                            color={'#fff'}
                        />
                    )}
                    <Text style={{ fontSize: 11, color: '#fff', marginLeft: 3 }}>{item.ratings}</Text>
                </View>
                {/* Price */}
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '800', marginVertical: 8 }}>MRP: ₹{item.price}
                    <Text> </Text>
                    {item.oldPrice && (<Text style={{ fontSize: 13, fontWeight: 'normal', textDecorationLine: 'line-through' }}>₹{item.oldPrice}</Text>)}
                </Text>
            </View>
        </Pressable >
    );
};

export default ProductItem;