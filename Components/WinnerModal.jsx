import React, { useState } from "react";
import { Text, View, Image, Modal, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

function WinnerModal(img) {
  const [openModal, setOpenModal] = useState(true);
  console.log(openModal);

  return (
    <View style={styles.centerModal}>
      <Modal visible={openModal}>
        <View style={styles.modalView}>
          <Text>You Win!</Text>
          <Image source={img} />
          <Icon name="close" onPress={() => setOpenModal(false)} />
        </View>
      </Modal>
    </View>
  );


}

const styles = StyleSheet.create({
    centerModal: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,    
    },
    modalView: {
        width: '80%',
        margin: 10,
        color:'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },

})

export default WinnerModal;
