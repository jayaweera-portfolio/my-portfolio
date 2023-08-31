import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import heroImage from '../../assets/heroImage.jpeg';

const windowWidth = Dimensions.get('window').width;

const HeroSection = () => {
  return (
    <ImageBackground source={heroImage} style={styles.bgimage} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.text}>
          <Text style={styles.text1}>Hi, it's me Sachithra</Text>
          <Text style={styles.text2}>I am a professional freelancer in Sri Lanka</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgimage: {
    width: '100%',
    aspectRatio: 1453 / 680, // Set the aspect ratio based on the image's dimensions
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add an overlay to improve text visibility
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontSize: windowWidth < 768 ? 30 : 50, // Adjust font size based on screen width
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    fontSize: windowWidth < 768 ? 18 : 25, // Adjust font size based on screen width
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HeroSection;
