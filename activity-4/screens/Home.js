//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from 'react';
import {Button,View,Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
           <Text style={styles.text}>
          <Icon  name="account-outline"  size={45}      
          onPress={() => navigation.navigate('Profile')} />
          Profile
          </Text> 
          
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({

  container: {
    alignmentItem:'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    justifyContent:'center',
    margin:2,
 },

});
