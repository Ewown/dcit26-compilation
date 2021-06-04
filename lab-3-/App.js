//BSCS 3-4
// Carpio, Nikki
// Castañeda, Gianne
// Go, Aaron
// Llabres, Godwin

import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, Modal, ScrollView } from 'react-native';

import SModal from './components/SModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>

      <Button title = "Click Me"  onPress={()=> setIsModalOpen(true)} />

      <SModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});