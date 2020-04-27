import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Aqui va el Titulo del juego</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    borderWidth: 1,
    width: 80,
    height: 80,
  },
  squareline: {
    flexDirection: "row",
  }
});

export default App;
