import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import AddressScreen from '../screens/AddressScreen';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={"BottomTabBar"} component={BottomTab} />
        </Stack.Navigator>
    );
};

export default ShopNavigator;