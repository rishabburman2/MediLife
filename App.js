/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';

import React, { useEffect } from "react";
import { StatusBar, Platform, PermissionsAndroid } from "react-native";

import Geolocation from '@react-native-community/geolocation';

import HomeScreen from "./src/screens/HomeScreen";
import SearchResultScreen from "./src/screens/SearchResultsScreen";
import SearchScreen from "./src/screens/SearchScreen";

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/Root'
import { withAuthenticator } from 'aws-amplify-react-native';

navigator.geolocation = require('@react-native-community/geolocation');

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const App: () => React$Node = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "MediLife Location Permission",
          message:
            "MediLife needs access to your Location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS == 'android') {
      androidPermission();
    }
    else {
      //IOS
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

const signUpConfig = {
  header: 'Sign Up!',
  hideAllDefaults: true,
  defaultCountryCode: '52',
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'string'
    }
  ]
};

export default withAuthenticator(App, { signUpConfig });