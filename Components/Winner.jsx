import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Modal,
} from "react-native";
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';


function Winner(props) {

    const [openModal, setOpenModal] = useState (true)

    return (
        <Modal visible={openModal}>
            <View style={styles.gamebody}>
                <Text style={styles.btnText}>You Win!</Text>
                <Image source={props.img}/>
                <Icon 
                name="close"
                onPress={()=>setOpenModal(false)}
                />
            </View>
        </Modal>
    )
}

export default Winner;