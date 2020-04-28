import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons  as Icon } from 'react-native-vector-icons';

 function App() {
   
  //estado inicial de la tabla 
  const [squareState, setSquareState] = useState([[0,0,0], [0,0,0], [0,0,0]]);

  //estao inicial del turno del jugador
  const [player, setPlayer] = useState(1);

  const handleClick = (row, col) => {
    //previene que cambie un recuadro ya usado
    if(squareState[row][col] !== 0) { return }

    //cambia el valor del recuadro presionado  
    const squares = [...squareState]
    squares[row][col] = player
    setSquareState(squares)    
    console.log(squares)

    //cambiar el turno del jugador
    setPlayer((player === 1) ? -1 : 1 )
  
  }

  //funcion para tomar coordenadas del tap y mostrar simbolo en pantalla
  const tapIcon = (row, col) => {

    const indSquare = squareState[row][col];

    switch(indSquare){
      case 1: return <Icon name="close" style={styles.square}/>
      case -1: return <Icon name="circle-outline" style={styles.square}/>
      default: return <View />
    } 
  }


  const startState = () => {
    setSquareState([[0,0,0],[0,0,0],[0,0,0]])
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Aqui va el Titulo del juego</Text>
      </View>
      
      <View style={styles.gamebody}>
        <View style={styles.player}>
          <Text>Aqui va el truno del jugador</Text>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity style={styles.square} 
          onPress={()=>handleClick(0,0)}
          > 
            {tapIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(0,1)}
          >
            {tapIcon(0,1)}  
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(0,2)}
          >
            {tapIcon(0,2)}
          </TouchableOpacity>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(1,0)}
          > 
            {tapIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(1,1)}
          >
            {tapIcon(1,1)} 
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(1,2)}          
          > 
            {tapIcon(1,2)}
          </TouchableOpacity>
        </View> 
        <View style={styles.squareline}>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(2,0)}
          > 
            {tapIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(2,1)}
          > 
            {tapIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}
          onPress={()=>handleClick(2,2)}
          > 
            {tapIcon(2,2)}
          </TouchableOpacity> 
        </View> 
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#BEADED',
    flexDirection: 'column',
  },
  title: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  player: {    
  
  },
  gamebody: {
    flex: 3,
    alignItems: 'center'
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
