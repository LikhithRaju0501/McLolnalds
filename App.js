import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import About from './src/screens/About';
import BuildBurger from './src/screens/BuildBurger';
import PlaceOrder from './src/screens/PlaceOrder';
import ButtonsPart from './src/components/ButtonsPart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Build' component={BuildBurger} />
        <Stack.Screen name='Confirm' component={PlaceOrder} />
        <Stack.Screen name='Buttons' component={ButtonsPart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
});

export default App;
