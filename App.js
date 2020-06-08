import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Screen1 from './Screens/Screen1'
import Screen3 from './Screens/Screen3'
import Screen4 from './Screens/Screen4'
import Screen2 from './Screens/Screen2'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerStyle = {{width:"75%"}}>
      <Drawer.Screen name="Search Countries" component={MyStack} options={{drawerIcon:()=> <Ionicons             name="md-search" size={24} color="black" /> }} />
      <Drawer.Screen name="Global Summary" component={Screen3} options={{drawerIcon:()=> <Ionicons             name="ios-globe" size={24} color="black" /> }} />
      <Drawer.Screen name="Continents" component={Screen4} options={{drawerIcon:()=> <Ionicons             name="md-globe" size={24} color="black" /> }} />
    </Drawer.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Search Countries" component={Screen1} options = {{headerShown: false}} />
      <Stack.Screen name="Cases Info" component={Screen2}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

