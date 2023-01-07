import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './ScreenNavigation';

export default function ScreenNavi() {
  return (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  );
}
