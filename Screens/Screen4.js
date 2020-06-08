import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Header from '../header'
import Stats from './Stats/Stats'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    barStyle = {styles.footer}
    shifting = {false}>
      <Tab.Screen name="Asia" component={Stats} initialParams = {{continent: "Asia"}} />
      <Tab.Screen name="Europe" component={Stats} initialParams = {{continent: "Europe"}} />
      <Tab.Screen name="Africa" component={Stats} initialParams = {{continent: "Africa"}} />
      <Tab.Screen name="Australia" component={Stats} initialParams = {{continent: "Australia%2FOceania"}} />
      <Tab.Screen name="SAmerica" component={Stats} initialParams = {{continent: "South America"}} />
      <Tab.Screen name="NAmerica" component={Stats} initialParams = {{continent: "North America"}} />
    </Tab.Navigator>
  );
}

export default class Screen4 extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Header nav = {this.props.navigation}/>
        <Tabs/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  footer:{
    width: "100%",
    backgroundColor:"#c42116",
    margin: 5
  }
});