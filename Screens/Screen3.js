import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../header'
import axios from 'axios'

export default class Screen3 extends React.Component{
  state={
    summary:{}
  }

  componentDidMount(){
    axios.get("https://api.covid19api.com/summary").then((res)=>{
     this.setState({summary: res.data.Global})
    })
  }

  render(){
    return(
      <View style = {styles.container}>
        <Header nav = {this.props.navigation}/>
        <View style ={styles.data}>
        <Text style = {styles.heading}>GLOBAL SUMMARY</Text>
        <View style = {styles.summary}>
        <Text style = {styles.text}>New Confirmed: {this.state.summary.NewConfirmed}</Text>
        <Text style = {styles.text}>Total Confirmed: {this.state.summary.TotalConfirmed}</Text>
        <Text style = {styles.text}>New Deaths: {this.state.summary.NewDeaths}</Text>
        <Text style = {styles.text}>Total Deaths: {this.state.summary.TotalDeaths}</Text>
        <Text style = {styles.text}>New Recovered: {this.state.summary.NewRecovered}</Text>
        <Text style = {styles.text}>Total Recovered: {this.state.summary.TotalRecovered}</Text>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    backgroundColor:"white"
  }, 
  summary:{
    marginTop: 20
  },
  data:{
    alignItems:"center"
  },
  heading:{
    marginTop:20,
    fontSize: 30,
    color:"#c42116",
    fontWeight:"600"
  },
  text:{
    fontSize: 18,
    marginBottom: 12,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});