import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const QuantitySelector = ({ quantity, setQuantity }) => {

    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1))
    }

    const onAdd = () => {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.Quantity}>{quantity}</Text>

            <Pressable onPress={onAdd} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#c24e5e",
        width: 125,
        justifyContent: "space-between",
    },
    button: {
        width: 35,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c24e5e"
    },
    buttonText: {
        color: "#fff",
    },
    Quantity: {
        textAlign: "center",
        textAlignVertical: "center",
        width: 50,
        height: 30,
        color: "#c24e5e"
    }
});

export default QuantitySelector;