//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from "react";
import{createStackNavigator} from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import {Button} from 'react-native';

import About from '../screens/About';

const Stack = createStackNavigator();

const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="About" component={About} options={{
           headerLeft: () => (
            <Entypo
            onPress={() => navigation.goBack()}
             name="back" size={24} color="black" />
           ),
            title: 'About',
            headerStyle: {
              backgroundColor: 'forestgreen'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontfamily:'Adobe Garamond',
            }
      }}/>
        </Stack.Navigator>
       
  );
};

export default AboutStack;