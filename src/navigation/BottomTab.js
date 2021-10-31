import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from "react-native-vector-icons/Entypo"
import CartScreen from '../screens/CartScreen';
import ShopHomeStack from './ShopHomeStacker';
import ShopCartStack from './ShopCartStacker';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#c24e5e' }} >
            <Tab.Screen
                name={"Home"}
                component={ShopHomeStack}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={25} />
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={ShopHomeStack}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="user" color={color} size={25} />
                }}
            />
            <Tab.Screen
                name={"Cart"}
                component={ShopCartStack}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="shopping-cart" color={color} size={25} />
                }}
            />
            <Tab.Screen
                name={"Menu"}
                component={Settings}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="menu" color={color} size={25} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;