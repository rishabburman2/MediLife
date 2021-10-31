import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

import QuantitySelector from "../QuantitySelector";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartItem = (props) => {
    const item = props.item.item;
    const q = props.item.quantity;
    console.log(q)
    const [quantity, setQuantity] = useState(q)
    return (
        <View style={styles.root}>
            <View style={styles.row}>
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
            </View >
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
        </View>
    );
};

export default CartItem;