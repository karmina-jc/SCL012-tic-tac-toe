import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fffacd',
      flexDirection: 'column',
    },
    title: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    tinyIcon: {
      width: 60,
      height: 60,
    },
    player: {
      padding: 20,    
    },
    gamebody: {
      flex: 3,
      alignItems: 'center'
    },
    square: {
      borderWidth: 1,
      width: 80,
      height: 80,
      display:'flex',
      alignItems: 'center',
      justifyContent:'center',      
    },
    squareline: {
      flexDirection: "row",
    },
    btn: {
      margin: 20,
    },
  });
  