import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import ProductScreen from '../screens/ProductScreen';


const Stack = createStackNavigator();

const ShopHomeStack = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={ShopHomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
};

export default ShopHomeStack;