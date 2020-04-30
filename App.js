import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  Image,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import styles from "./styles.js";

function App() {
  //estado inicial de la tabla
  const [squareState, setSquareState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  //estao inicial del turno del jugador
  const [player, setPlayer] = useState(1);

  const [winner, setWinner] = useState(null);

  const startState = () => {
    setSquareState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    setWinner(null);
  };

  const getWinner = () => {
    let sum;
    let arr = squareState;

    //revisando hileras...
    for (let i = 0; i < 3; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }

    //revisando columnas...
    for (let i = 0; i < 3; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }
    //revisando diagonales...
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    //si no hay ganador...
    return 0;
  };

  const handleClick = (row, col) => {
    //previene que cambie un recuadro ya usado
    if (squareState[row][col] !== 0) {
      return;
    }

    //cambia el valor del recuadro presionado
    const squares = [...squareState];
    squares[row][col] = player;
    setSquareState(squares);

    //cambiar el turno del jugador
    setPlayer(player === 1 ? -1 : 1);

    //se determinar al ganador...
    let value = getWinner();

    if (value === 1) {
      Alert.alert("the winnwr is Ada!");
      startState();
    } else if (value === -1) {
      Alert.alert("the winner is Amelia!");
      startState();
    }
  };

  //funcion para tomar coordenadas del tap y mostrar imagen en pantalla
  const tapIcon = (row, col) => {
    const indSquare = squareState[row][col];

    switch (indSquare) {
      case 1:
        return (
          <Image
            style={styles.tinyIcon}
            source={require("./assets/moon-96.png")}
          />
        );
      case -1:
        return (
          <Image
            style={styles.tinyIcon}
            source={require("./assets/star-96.png")}
          />
        );
      default:
        return <View />;
    }
  };

  const nextPlayer = () => {
    switch (player) {
      case 1:
        return <Text>Ada</Text>;
      case -1:
        return <Text>Amelia</Text>;
      default:
        <Text />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Aqui va el Titulo del juego</Text>
      </View>
      <View style={styles.gamebody}>
        <View style={styles.player}>
          <Text>Player {nextPlayer()} </Text>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(0, 0)}
          >
            {tapIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(0, 1)}
          >
            {tapIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(0, 2)}
          >
            {tapIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(1, 0)}
          >
            {tapIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(1, 1)}
          >
            {tapIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(1, 2)}
          >
            {tapIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(2, 0)}
          >
            {tapIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(2, 1)}
          >
            {tapIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => handleClick(2, 2)}
          >
            {tapIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <Button title="New Game" 
        style={styles.btn}
        onPress={() => startState()} 
        />
      </View>
    </View>
  );
}

export default App;
