import { StyleSheet } from 'react-native';


export const global = StyleSheet.create ({

  //HOME.js
  containerHome: {
    alignItems:'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  textHome: {
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 80,
    fontWeight: 'bold',
    justifyContent:'center',
    margin:2,
    fontfamily:'Adobe Garamond'
 },
    imageHome: {
    width:250,
    height: 250,
    marginLeft: 40,
    borderRadius: 30,
    },
    
 //About.js
   containerAbout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   
 },
   btnIconAbout:{
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 23,
    backgroundColor: '#00CC00',
    bottom: 10,
    right: 10,
   
  },

//Profile.js
  containerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'forestgreen',
    paddingBottom: 20,
  },

  imageProfile: {
    width: 300,
    height: 250,
    },

  nameProfile: {
    borderWidth: 2,
    padding: '10%',
    minWidth: 370,
    backgroundColor: '#187a40',
    marginBottom: 20,
    borderStyle: 'solid',
    borderBottomColor: 'white',
    borderBottomWidth: 20,
    },

  aboutProfile: {
    },
    
  contactProfile: {
    },  

  otherProfile: {
    },  


})