//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from 'react';
import {Button,View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {global} from '../styles/global';

const About = ({navigation}) => {
  return(
    <View style={global.containerAbout}>
            <Text style={global.about}> Gianne Loves KUYA CHAN
          </Text>
          <TouchableOpacity style={global.btnIconAbout} 
    onPress={() => navigation.navigate("Home")}>
    <Entypo name="home" size={40} color="black" />
    </TouchableOpacity>

    </View>
  );
};

export default About;

