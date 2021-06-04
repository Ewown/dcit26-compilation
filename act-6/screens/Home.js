//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {global} from '../styles/global';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

function fetchRandomData() {
  setLoading(true);
  fetch ('https://randomuser.me/api')
  .then((response) => response.json())
  .then((json) => {
    setData(json.results[0])})
  .catch((error) => console.log(error))
  .finally(() => setLoading(false));
}

useEffect(() => {
  fetchRandomData();
}, []);

  return(
    <View style = {global.containerHome}>
        { isLoading ? <ActivityIndicator size = "large" color = "#0000ff" /> : ( 
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={global.imageHome} source={{uri: data.picture.large}} />
          </TouchableOpacity>  
        )}
        { isLoading ? true : (
          <Text style = {global.textHome}>
            {data.name.first} {data.name.last} </Text>
        )}
        { isLoading ? true: (
          <Button title="Random User" color="#89CFF0" onPress={() => {fetchRandomData(); }  }/>
        )}
    </View>
  );
}
export default Home;


