import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import useSliderValue from '../../hooks/useSliderValue';
import useCustomValue from '../../hooks/useCustomValue';

const CustomValuePopup = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);



    // object destructuring
    const { sliderValue, setSliderValue } = useSliderValue()
    const { customValue, setCustomValue } = useCustomValue()

    const SaveCustomValueClick = () => {

        setSliderValue(customValue);
        // Console is behind
        console.log('Set Value:', sliderValue);
        setIsModalVisible(() => !isModalVisible);
    }
    return (
        <View style={styles.container}>
            <View style={styles.separator} >
                <TouchableOpacity onPress={handleModal} style={styles.CustomValueButton}>
                    <Text style={styles.CustomValueButtonText}>Custom Value</Text>
                </TouchableOpacity>
            </View>

            <Modal
                isVisible={isModalVisible}
                animationIn="bounceInDown"
            >

                <View style={styles.SaveModal}>
                    <Text style={styles.PreferedValueText}>Enter Prefered Value</Text>
                    <TextInput
                        value={customValue}
                        onChangeText={(text) => setCustomValue(text)}
                        clearTextOnFocus
                        placeholder="Value"
                        style={styles.CustomValueButtonInput} >
                    </TextInput>

                    <TouchableOpacity onPress={handleModal} style={styles.CancelValueButton}>
                        <Text style={styles.CancelValueText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={SaveCustomValueClick} style={styles.SaveValueButton}>
                        <Text style={styles.SaveValueText}>Save</Text>
                    </TouchableOpacity>


                    <Text style={styles.cool}>{sliderValue}</Text>


                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    separator: {
        //Nothing here
    },

    CustomValueButton: {
        left: 3,
        top: 480,
        width: 160,
        height: 60,
        paddingTop: 13,
        borderRadius: 15,
        backgroundColor: '#571A66',
        color: "pink",
        color: "#ffdeff",
    },

    CustomValueButtonText: {
        alignItems: 'center',
        color: '#FFDEFF',
        fontSize: 25,
        paddingLeft: 5,
        paddingTop: 1,
    },

    SaveModalButtonText: {
        alignItems: 'center',
        color: '#FFDEFF',
        fontSize: 25,
        paddingLeft: 53,
        paddingTop: 1,
    },

    SaveModal: {
        flex: 1,
        backgroundColor: '#CD6FFE',
        marginTop: 200,
        marginBottom: 370,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 15,
    },

    PreferedValueText: {
        top: 30,
        left: 40,
        alignItems: 'center',
        color: '#FFDEFF',
        fontSize: 25,
        marginBottom: 15,
    },

    CustomValueButtonInput: {
        top: 55,
        left: 30,
        marginLeft: 50,
        marginRight: 110,
        color: '#56047C',
        backgroundColor: 'FFF',
        fontSize: 25,
        borderWidth: 3,
        borderColor: "#56047C",
        borderRadius: 10,
    },

    CancelValueButton: {
        backgroundColor: "#571A66",
        top: 85,
        left: 30,
        width: 100,
        height: 50,
        borderRadius: 10,
    },

    CancelValueText: {
        height: 35,
        width: 100,
        paddingLeft: 10,
        paddingTop: 10,
        color: '#FFDEFF',
        fontSize: 25,
    },

    SaveValueButton: {
        backgroundColor: "#571A66",
        top: 35,
        left: 175,
        height: 50,
        width: 70,
        borderRadius: 10,
    },

    SaveValueText: {
        height: 50,
        width: 70,
        paddingLeft: 10,
        paddingTop: 10,
        marginRight: 230,
        color: '#FFDEFF',
        fontSize: 25,
    },
});
export default CustomValuePopup;