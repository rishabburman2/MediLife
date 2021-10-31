import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultsScreen';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"Search"} component={SearchScreen} />
            <Stack.Screen name={"Result"} component={SearchResultScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;