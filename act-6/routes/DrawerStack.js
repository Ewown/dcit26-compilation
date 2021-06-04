//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import{createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerStyle={{
       backgroundColor: 'forestgreen',
       width: 240,
       }}
      drawerContentOptions={{
      activeTintColor: 'grey',
      labelStyle: {fontFamily: 'Adobe Garamond', fontWeight: 'bold', fontSize: 15},
      itemStyle: { marginVertical: 3 },
      }}>
    <Drawer.Screen name="Home" component={HomeStack} options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
          <Octicons name="home" size={24} color="black" />
           ) }}
        />
    <Drawer.Screen name="About" component={AboutStack} options={{
          title: 'About',
          drawerIcon: ({ focused, size }) => (
          <Ionicons name="information-circle" size={24} color="black" />
           ) }}/>
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

export default MainNavigator;