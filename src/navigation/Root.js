import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';
// import SearchResultScreen from '../screens/SearchResultsScreen';
import HomeNavigator from './Home';
import SearchScreen from '../screens/SearchScreen';
import CustomDrawer from './CustomDrawer';
import Settings from '../screens/Settings';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import ShopNavigator from './Shop';

const Drawer = createDrawerNavigator();

const Dummy = (props) => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>{props.name}</Text>
    </View>
);

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => (<CustomDrawer {...props} />)}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Drawer.Screen name={'Home'} component={HomeNavigator} />
                <Drawer.Screen name={'Request Ambulance'} component={SearchScreen} />
                <Drawer.Screen name={'Shop For Medicines'} component={ShopNavigator} />
                {/* <Drawer.Screen name={'Wallet'}>
                    {() => <Dummy name={'Wallet'} />}
                </Drawer.Screen> */}
                <Drawer.Screen name={'Settings'} component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;