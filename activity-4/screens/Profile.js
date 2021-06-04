//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from 'react';
import {Button,View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>
          <View style={styles.profile1}>
            <Text style={styles.invert_fx}>
              {' '}
            <Text style={styles.emphasis2}> Name: </Text> Nikki Carpio
            </Text>
            <Text style={styles.invert_fx}>
              {' '}
              <Text style={styles.emphasis2}> Section: </Text> BSCS 3-4{' '}
            </Text>
            <Text style={styles.invert_fx}>
              {' '}
              <Text style={styles.emphasis2}> Favorite Subject: </Text> Rizal
            </Text>
          </View>
          <View style={styles.profile2}>
            <Text>
              <Text style={styles.emphasis}> Name: </Text> Gianne Russle
              Castañeda
            </Text>
            <Text>
              {' '}
              <Text style={styles.emphasis}> Section: </Text> BSCS 3-4{' '}
            </Text>
            <Text>
              {' '}
              <Text style={styles.emphasis}> Favorite Subject: </Text> Rizal
            </Text>
          </View>
          <View style={styles.profile1}>
            <Text style={styles.invert_fx}>
              {' '}
              <Text style={styles.emphasis2}> Name: </Text> Godwin Lorenz
              Llabres
            </Text>
            <Text style={styles.invert_fx}>
              {' '}
              <Text style={styles.emphasis2}> Section: </Text> BSCS 3-4{' '}
            </Text>
            <Text style={styles.invert_fx}> Rizal</Text>
          </View>
          <View style={styles.profile2}>
            <Text>
              {' '}
              <Text style={styles.emphasis}> Name: </Text> Aaron John Go
            </Text>
            <Text>
              {' '}
              <Text style={styles.emphasis}> Section: </Text> BSCS 3-4{' '}
            </Text>
            <Text>
              {' '}
              <Text style={styles.emphasis}> Favorite Subject: </Text> Rizal
            </Text>
          </View>
        </Text>
      <TouchableOpacity style={styles.btnIcon} 
    onPress={() => navigation.navigate("About")}>
    <SimpleLineIcons name="info" size={40} color="black" />
    </TouchableOpacity>
      </View>
      
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'forestgreen',
    paddingBottom: 20,
  },
    profile1: {
    borderWidth: 2,
    padding: '10%',
    minWidth: 370,
    backgroundColor: '#187a40',
    marginBottom: 20,
    borderStyle: 'solid',
    borderBottomColor: 'white',
    borderBottomWidth: 20,
  },
  invert_fx: {
    color: 'white',
  },
  profile2: {
    borderWidth: 2,
    padding: '10%',
    backgroundColor: '#d3c74d',
    marginBottom: 20,
    minWidth: 350,
    borderColor: 'black',
    borderBottomWidth: 20,
  },
  emphasis: {
    alignItems: 'justify',
    fontSize: 18,
  },
  emphasis2: {
    alignItems: 'justify',
    fontSize: 18,
    color: 'white',
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
