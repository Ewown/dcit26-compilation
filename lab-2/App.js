// BSCS 3-4
// Carpio, Nikki  
// Castañeda, Gianne
// Go, Aaron 
//Llabres, Godwin

import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredword, setenteredword] = useState ('');
  const [addedword, setadedword] = useState([]);
  
  const typewordhandler = (enteredword) => {
    setenteredword (enteredword);
  };

  const addtexthandler = () => {
    setadedword(currentword => [...currentword, enteredword]);
    setenteredword('');
  };

  return (
    <View style= {styles.container}>
      <View style= {styles.inputcontainer}>
      <TextInput placeholder="Enter Text"
        style= {styles.inputword}
        onChangeText ={typewordhandler}
        value={enteredword}
        />
      <Button title="Add" onPress={addtexthandler}/>
      </View>
          <View>
          {addedword.map ((word) => <ScrollView style={styles.listitem}> <text key={word}>{word}</text> </ScrollView>)}
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  inputcontainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputword: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

  listitem:{
    backgroundColor: 'gray',
    padding: 10,
    fontfamily:  'Adobe Garamond',
    fontSize: 15,
    marginTop: 5,
    borderColor: 'black',
    justifyContent: 'space-between',
    borderWidth: 1
  }  
  
});