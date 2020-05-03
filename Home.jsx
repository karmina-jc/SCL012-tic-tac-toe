import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./styles.js";

function Home() {
  //estado inicial de la tabla
  const [squareState, setSquareState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  //estao inicial del turno del jugador
  const [player, setPlayer] = useState(1);

  const [winner, setWinner] = useState("");

  const startState = () => {
    setSquareState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    setWinner(null)
  };

  const ifTie = () => {
    let arr = squareState;

    for (let i = 0; i < 3; i++) {
      if (arr[0][i] === 0) {
        return 0;
      } else if (arr[1][i] === 0) {
        return 0;
      } else if (arr[2][i] === 0) {
        return 0;
      }
    }
    return 1;
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
    return null;
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
    let tie = ifTie();

    if (value === 1) {
      Alert.alert("the winner is Ada");
      startState();
    } else if (value === -1) {
      Alert.alert("the winner is Amelia");
      startState();
    } else if (tie === 1) {
      Alert.alert("It's a Tie");
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
            source={require("./assets/cara-ada.png")}
          />
        );
      case -1:
        return (
          <Image
            style={styles.tinyIcon}
            source={require("./assets/cara-amelia.png")}
          />
        );
      default:
        return <View />;
    }
  };

  const nextPlayer = () => {
    switch (player) {
      case 1:
        return (
          <Image
            style={styles.playerIcon}
            source={require("./assets/cara-ada.png")}
          />
        );
      case -1:
        return (
          <Image
            style={styles.playerIcon}
            source={require("./assets/cara-amelia.png")}
          />
        );
      default:
        <Text />;
    }
  };

  return (
    <ImageBackground
      source={require("./assets/fondo.png")}
      style={styles.container}
    >
      <View style={styles.logo}>
        <Image
          style={styles.logoHome}
          source={require("./assets/logo-500.png")}
        />
      </View>
      <View style={styles.gamebody}>
        <View style={styles.player}>
          <Text style={styles.playerText}>Player {nextPlayer()} </Text>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={[styles.square, { borderTopWidth: 0, borderLeftWidth: 0 }]}
            onPress={() => handleClick(0, 0)}
          >
            {tapIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.square, { borderTopWidth: 0 }]}
            onPress={() => handleClick(0, 1)}
          >
            {tapIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.square, { borderTopWidth: 0, borderRightWidth: 0 }]}
            onPress={() => handleClick(0, 2)}
          >
            {tapIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={[styles.square, { borderLeftWidth: 0 }]}
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
            style={[styles.square, { borderRightWidth: 0 }]}
            onPress={() => handleClick(1, 2)}
          >
            {tapIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.squareline}>
          <TouchableOpacity
            style={[
              styles.square,
              { borderBottomWidth: 0, borderLeftWidth: 0 },
            ]}
            onPress={() => handleClick(2, 0)}
          >
            {tapIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.square, { borderBottomWidth: 0 }]}
            onPress={() => handleClick(2, 1)}
          >
            {tapIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.square,
              { borderBottomWidth: 0, borderRightWidth: 0 },
            ]}
            onPress={() => handleClick(2, 2)}
          >
            {tapIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => startState()}>
          <Text style={styles.btnText}>New Game</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Home;
