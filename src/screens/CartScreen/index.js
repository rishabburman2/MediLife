import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import cart from "../../assets/data/cart";
import CartItem from "../../components/CartItem";
import ProductButton from "../../components/ProductButton";
import { useNavigation } from "@react-navigation/native";



const CartScreen = () => {

    const navigation = useNavigation();

    const total_price = cart.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0)

    const onCheckout = () => {
        navigation.navigate('Address');
    }

    return (
        <View style={styles.root}>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartItem item={item} />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={{ paddingLeft: 6 }}>
                        <Text>Subtotal ({cart.length} Items):
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>  ₹{total_price}</Text>
                        </Text>
                        <ProductButton
                            text="Proceed to Checkout"
                            onPress={onCheckout}
                        />
                    </View>
                )}
                ListFooterComponent={() => (
                    <View>
                        <ProductButton
                            text="Proceed to Checkout"
                            onPress={onCheckout}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: "#fff"
    }
})

export default CartScreen;