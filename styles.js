import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fffacd',
      flexDirection: 'column',      
    },
    logo: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,      
    },
    logoHome: {
      width: 300,
      height: 180,
      resizeMode: 'contain',
    },
    tinyIcon: {
      width: 70,
      height: 70,      
    },
    player: {
      display: 'flex',
      paddingBottom: 10,
    },
    playerText: {
      paddingBottom: 10,
      fontFamily: 'amaranth-bold',
      fontSize: 30,
      color: '#F9B9B7',
    },
    playerIcon: {
      width: 60,
      height: 60,
    },
    gamebody: {
      flex: 3,
      alignItems: 'center',
    },
    square: {
      borderColor: '#0FA3B1',
      borderWidth: 2,
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
      display: 'flex',
      alignItems: "center",
      marginTop:20,
      height: 40,
      width:160,
    },
    btnText: {
      padding: 15,
      backgroundColor: '#0FA3B1',
      borderRadius: 15,
      color: '#fffacd',
      fontFamily: 'amaranth-regular',
      fontSize: 20,     
    },
  });
  