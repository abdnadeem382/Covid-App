import * as React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import axios from 'axios'
import { Card } from 'react-native-paper';

export default class Stats extends React.Component{

  state = {
    countries:[],
    stats : []
  }

  getCountries =()=>{
    axios.get(`https://disease.sh/v2/continents/${this.props.route.params.continent}`)
    .then((res)=>(this.setState({countries: res.data.countries})))
    .then(()=>{
          axios.get(`https://disease.sh/v2/countries/${this.state.countries}`)
          .then(
            (res)=>(this.setState({stats: [...res.data]}))
            )
        }
    )
    .catch((err)=>{alert(err)})
  }

  componentDidMount(){
   this.getCountries();
  }

  showCountries = (item)=>{
      return(
        <Card style = {styles.card}>
          <View style = {styles.countryNameView}>
            <Text style = {styles.countryName}>{item.country}</Text>
          </View>
          <View style = {styles.statsView}>
          <Text style = {styles.stats}>Total Cases: {item.cases}</Text>
          <Text style = {styles.stats}>Total Deaths: {item.deaths}</Text>
          <Text style = {styles.stats}>Total Recovered: {item.recovered}</Text>
          <Text style = {styles.stats}>Active Cases: {item.active}</Text>
          </View>
        </Card> )
  }

  render(){
    console.log(this.state.countries)
    console.log(this.state.stats)
  return(
    <View style= {styles.container}>
    <FlatList
        data = {this.state.stats}
        renderItem = {({item})=> {return this.showCountries(item)}}
        keyExtractor = {(item)=> item.countryInfo.iso3}
    />
    </View> ) 
}
}

const styles = StyleSheet.create({
  card:{
    margin: 3,
    padding: 10,
    alignItems:"center",
    marginTop:10
  },
  container:{
    flex: 1,
  },
  countryNameView:{
     backgroundColor: '#c42116',
     padding: 6,
     paddingBottom:10,
     paddingTop: 10,
     marginBottom:2,
     width: 250,
     justifyContent:"center",
     alignItems:"center"
  },
  countryName:{
    fontSize: 16,
    color:"white"
  },
  statsView:{
    alignItems:"center",
    
  },
  stats:{
    borderBottomColor: "grey",  
    borderBottomWidth: 1,
    marginBottom:2,
    marginTop: 3
  }
});


