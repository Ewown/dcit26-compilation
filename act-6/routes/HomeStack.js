//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin
import React from "react";
import{createStackNavigator} from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{
        headerLeft: () => (
            <SimpleLineIcons 
            onPress={() => navigation.toggleDrawer()}
           name="menu" size={24} color="black" />
          ),
            headerStyle: {
              backgroundColor: 'forestgreen',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontfamily:'Adobe Garamond',
            },
          }} />
      <Stack.Screen name="Profile"  component={Profile}/>
      
        </Stack.Navigator>
        
  );
}

export default HomeStack;