import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from './ScreenName';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator initialRouteName={ScreenName.Home}>
      <Stack.Screen name={ScreenName.Home} component={Home} />
    </Stack.Navigator>
  );
}
