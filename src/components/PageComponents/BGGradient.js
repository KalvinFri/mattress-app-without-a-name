import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientComponentBG = () => {
  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['#5B2B74', '#BF67ED', 'transparent']}
    style={styles.background}
  />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1500,
    zIndex: -1,
},
})

export default GradientComponentBG;