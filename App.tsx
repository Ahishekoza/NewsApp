// navigation - the navigation prop is passed in to every 
// screen component (definition) in the native stack navigator 
// (more about this later in "The navigation prop in depth").

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Splash from './src/Splash';
import SearchScreen from './src/SearchScreen';
import DetailsScreen from './src/DetailsScreen';
const Stack = createNativeStackNavigator();

function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='DetailNews' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
