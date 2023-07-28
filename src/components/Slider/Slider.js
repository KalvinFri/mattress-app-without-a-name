//import React in our code
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
//import all the components we are going to use
import CircularProgress from 'react-native-circular-progress-indicator';
// import { CircularSlider } from 'react-native-react-native-rounded-slider';
import { color } from 'react-native-reanimated';
import useSliderValue from '../../hooks/useSliderValue';
import PopupScreen from '../PageComponents/Popup'



const Slidercomp = () => {
 const {sliderValue} = useSliderValue()
 const [savedValue, setSavedValue] = useState(null);

  const SaveButton = () => {

    const SaveButtonClick = () => {
      setSavedValue(sliderValue);
      // Console is behind
      console.log('Saved Value:', savedValue);
    }

    console.log(sliderValue)

    


    // return (
    //   <TouchableOpacity style={styles.SaveButton} onPress={SaveButtonClick}>
    //     <Text style={styles.SaveButtonText}>Save</Text>
    //   </TouchableOpacity>
    // )
  }

  const HandleSliderChange = () => {
    console.log('Slider Value:', sliderValue);
    AsyncStorage
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.ProgressBar}>
        <CircularProgress
          value={sliderValue}
          onAnimationComplete={HandleSliderChange}
          inActiveStrokeColor={'#571A66'}
          activeStrokeWidth={30}
          activeStrokeColor={'#FFDEFF'}
          inActiveStrokeWidth={30}
          inActiveStrokeOpacity={0.5}
          radius={120}
          maxValue={100}
          valueSuffix={'%'}
          progressValueColor={'#FFDEFF'}
        />
      </View>
      <TextInput>

      </TextInput>
      <Text style={styles.FirmnessScaleText}> Firmness Scale </Text>
      <View style={styles.PopupScreenSliderButton}>
        {/* Save button */}
        <PopupScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  PopupScreenSliderButton: {
    left: 53,
  },

  FirmnessScaleText: {
    fontSize: 30,
    top: 125,
    left: 73,
    color: '#FFDEFF'
  },

  SaveButton: {
    position: 'absolute',
    marginLeft: 90,
    marginTop: 500,
    width: 160,
    height: 60,
    paddingTop: 13,
    paddingLeft: 53,

    borderRadius: 15,
    backgroundColor: '#571A66',
  },

  SaveButtonText: {
    // fontFamily: 'Shrikhand',
    fontSize: 25,
    color: '#FFDEFF',
  },

  SliderValueText: {
    // Font
    color: '#000',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    //Spacing
    position: 'absolute',
    marginLeft: 135,
  },

  ProgressBar: {
    // marginLeft: 50,
    // marginTop: 100,
    left: 50,
    top: 100,
  },

  SliderColor: {
  },
});

export default Slidercomp;