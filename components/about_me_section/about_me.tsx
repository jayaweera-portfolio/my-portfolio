import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import About from '../../assets/about2.jpeg';

const AboutMeSection = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.heading}>About Me</Text>
      <View style={styles.aboutMe}>


        <View style={styles.imageContainer}>
          <Image source={About} style={styles.image} />
        </View>

        <View style={styles.content}>

          <Text style={styles.paragraph}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Text>
          <View style={styles.list}>
            <Text>Name: Sachithra Jayaweera</Text>
            <Text>Age: 25</Text>
            <Text>Occupation: Web Developer</Text>
          </View>
          <Text style={styles.paragraph}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Text>
        </View>

      </View>
    </View>


  );
};

const styles = StyleSheet.create({

  about: {
    marginTop: 50,
    alignItems: 'center'
  },
  aboutMe: {
    flexDirection: 'row', // Align items horizontally
    padding: 20,
    marginBottom: 20,
  },
  imageContainer: {
    paddingRight: 20,
  },
  image: {
    height: 250,
    width: 200,
  },
  content: {
    flex: 1,
  },
  heading: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,

  },
  paragraph: {
    marginBottom: 10,
  },
  list: {
    padding: 0,
    margin: 0,
  },
});

export default AboutMeSection;
