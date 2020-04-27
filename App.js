import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Aqui va el Titulo del juego</Text>
      </View>
      <View style={styles.player}>
        <Text>Aqui va el turno del jugador</Text>
      </View>
      <View style={styles.squareline}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
  },
  title: {
    flex: 1,
    
  },
  player: {
    flex: 1,
  },
   squareline: {
    flexDirection: "row",
  },
  square: {
    borderWidth: 1,
    width: 80,
    height: 80,
  },
 
});

export default App;
