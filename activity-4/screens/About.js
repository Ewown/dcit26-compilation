//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from 'react';
import {Button,View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const About = ({navigation}) => {
  return(
    <View style={styles.container}>
            <Text style={styles.about}> Gianne Loves KUYA CHAN
          </Text>
          <TouchableOpacity style={styles.btnIcon} 
    onPress={() => navigation.navigate("Home")}>
    <Entypo name="home" size={40} color="black" />
    </TouchableOpacity>

    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   
 },
   btnIcon:{
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 23,
    backgroundColor: '#00CC00',
    bottom: 10,
    right: 10,
   
  },

});

