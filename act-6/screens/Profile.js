//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from 'react';
import {Button, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

import {global} from '../styles/global';



const Profile = ({ route }) => {

  const data = route.params;

  return (
    

    <ScrollView style={global.containerProfile}>
          <Image style = {global.imageProfile} source={{uri: data.picture.large}} />
          <Text style = {global.nameProfile}> {data.name.title}. {data.name.first} {data.name.last} </Text>

        <AntDesign name="user" size={24} color="black"> About </AntDesign>
           <Text style = {global.aboutProfile}> Age: {data.dob.age} 
          {'\n'} Birthday: {data.dob.date}
          {'\n'} Gender: {data.gender}
          {'\n'} Address: {data.location.street.number} {data.location.city} {data.location.state} {data.location.country}</Text>

        <Fontisto name="email" size={24} color="black"> Contact </Fontisto>
          <Text style = {global.contactProfile}> Email: {data.email}
          {'\n'} Phone: {data.phone}</Text>

        <AntDesign name="idcard" size={24} color="black"> Other </AntDesign>
          <Text  style = {global.otherProfile}> Data Registrered: {data.registered.date}</Text>

      </ScrollView>

  );
};

export default Profile;

