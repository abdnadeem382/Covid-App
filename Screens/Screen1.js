import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import Header from '../header'
import axios from 'axios'
import Screen2 from './Screen2'

export default class Screen1 extends React.Component{
  state = {
    countries :[],
    searched : [],
    text: "",
  }

  componentDidMount(){
    axios.get("https://api.covid19api.com/countries").then((res)=>{
     this.setState({countries: res.data})
    })
    .catch((err)=>{
      alert(err);
    })
  }

  selectCountry = (country) =>{
     this.props.navigation.navigate("Cases Info", {country})
  }

  showCountries = (item)=>{
      return(
        <Card style = {styles.card} onPress = {()=>this.selectCountry(item.Country)}>
          <Text style= {styles.country}>{item.Country}</Text>
        </Card> )
  }

  search = (newText) =>{
    Promise.resolve().then(()=>{
      this.setState({text: newText});
      this.setState({ searched :this.state.countries.filter((item)=>{
                  return (item.Country.toLowerCase().includes(this.state.text.toLowerCase()))})})
    })
  }

  render(){
    return(
      <View style = {styles.container}>
          <Header nav = {this.props.navigation}/>
        <View>
          <TextInput
            stye = {styles.input}
            theme= {theme}
            type = "outlined"
            label='Search Country'
            value={this.state.text}
            onChangeText={text => {this.search(text)}} />
        </View>
        <FlatList
          data = {(this.state.text === "") ? this.state.countries : this.state.searched}
          renderItem = {({item})=> {return this.showCountries(item)}}
          keyExtractor = {(item)=> item.ISO2}
        />
      </View>
    )
  }
}

const theme = {
  colors:{
    primary:  '#c42116',
    accent: '#c42116'
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  card:{
    margin: 3,
    padding: 10,
    height: 46,
    justifyContent:"center"
  },
  input:{
    margin: 5
  },
  country:{
    fontSize: 18
  }
});