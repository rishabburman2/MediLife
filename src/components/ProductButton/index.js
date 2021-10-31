import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const ProductButton = ({ text, onPress, containerStyles }) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#c24e5e",
        marginVertical: 10,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    text: {
        color: "#fff",
        fontSize: 16,
    },
})

export default ProductButton;



