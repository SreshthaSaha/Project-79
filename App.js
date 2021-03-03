import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SignupLoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
    <View>
    <SignupLoginScreen/>
    <AppContainer/>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  Home_Screen :{screen: HomeScreen},
  Exchange_Screen :{screen: ExchangeScreen},
})
const AppContainer = createAppContainer(TabNavigator);


