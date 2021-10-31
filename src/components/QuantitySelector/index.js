import React from "react";
import { View, Text, Pressable } from "react-native";

const QuantitySelector = () => {

    const onMinus = () => {

    }

    const onAdd = () => {

    }

    return (
        <View>
            <Pressable onPress={onMinus}>
                <Text>-</Text>
            </Pressable>

            <Text>0</Text>

            <Pressable onPress={onAdd}>
                <Text>+</Text>
            </Pressable>
        </View>
    );
};

export default QuantitySelector;