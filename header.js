import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons';

export default function Header(props){
  return(
    <View style = {styles.header}>
      <Octicons name="three-bars" size={24} color="white" onPress = {()=>{props.nav.openDrawer()}} />
    </View>
  )
}

const styles = StyleSheet.create({
header: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#c42116',
    padding: 12,
    width: "100%"
  }

})