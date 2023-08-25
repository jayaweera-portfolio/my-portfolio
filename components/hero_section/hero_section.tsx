import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import heroImage from '../../assets/heroImage.jpeg';

const HeroSection = () => {
  return (
    <ImageBackground source={heroImage} style={styles.bgimage} resizeMode="cover">

      <View style={styles.text}>
        <Text style={styles.text1}>Hi, it's me Sachithra</Text>
        <Text style={styles.text2}>I am a professional freelancer in Sri Lanka</Text>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgimage: {
    height: 680,
    width: 1453,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    marginTop: 50,
  },
  text1:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  text2:{
    color: 'white',
    fontSize: 25,
    alignItems: 'center'
  }

});

export default HeroSection;
