import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios'

export default class Screen2 extends React.Component{
  state = {
    country:{
      Date: "No Data Found",
      Cases: "No Data Found"
    },
    countryTotal: {
      Confirmed:"No Data Found",
      Deaths:"No Data Found",
      Recovered:"No Data Found",
      Active:"No Data Found"
    },
    date:"No Data Found"
  }

  dayOne = () => {
    axios.get(`https://api.covid19api.com/total/dayone/country/${this.props.route.params.country}/status/confirmed`)
    .then((res)=>{
      if(res.data[0]){
      this.setState({country: res.data[0]})
      let date = res.data[0].Date;
      this.setState({date: date.substring(0,10)})}
    })
    .catch(err=>console.log(err)) 
  }

  totalStats = () => {
    axios.get(`https://api.covid19api.com/total/country/${this.props.route.params.country}`).
    then((res)=> {
      if(res.data[res.data.length-1]){
      this.setState({countryTotal : res.data[res.data.length-1]})
      }
    })
    .catch(err=>console.log(err))
  }

  componentDidMount(){
      this.dayOne();
      this.totalStats();
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.headingView}>
          <Text style = {styles.heading}>{this.props.route.params.country}</Text>
        </View>
        <View style = {styles.data}>
          <Text style = {styles.text}>First Case Date: {this.state.date}</Text>
          <Text style = {styles.text}>Cases On First Day: {this.state.country.Cases}</Text>
          <Text style = {styles.text}>Total Confirmed Cases: {this.state.countryTotal.Confirmed}</Text>
          <Text style = {styles.text}>Total Deaths: {this.state.countryTotal.Deaths}</Text>
          <Text style = {styles.text}>Total Recovered: {this.state.countryTotal.Recovered}</Text>
          <Text style = {styles.text}>Active Cases: {this.state.countryTotal.Active}</Text>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white"
  },
   heading:{
    fontSize: 28,
    marginBottom: 5,
    color: "white"
  },
  text:{
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop:12
  },
  data:{
    margin: 8,
    marginTop: 12,
    justifyContent: "center",
    alignItems:"center"
  },
  headingView:{
    backgroundColor: "#c42116",
    width: "100%",
    padding: 12,
    alignItems:"center",
    margin: 8,
  }
});