import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import AddressScreen from '../screens/AddressScreen';


const Stack = createStackNavigator();

const ShopCartStack = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Address" component={AddressScreen} />
        </Stack.Navigator>
    );
};

export default ShopCartStack;