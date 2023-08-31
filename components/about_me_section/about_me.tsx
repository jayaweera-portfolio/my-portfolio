import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import About from '../../assets/about2.jpeg';

const windowWidth = Dimensions.get('window').width;

const AboutMeSection = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.heading}>About Me</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.aboutMe}>
          
          <View style={styles.imageContainer}>
            <Image source={About} style={styles.image} />
          </View>

          <View style={styles.content}>
            <Text style={styles.paragraph}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
            <View style={styles.list}>
              <Text>Name: Sachithra Jayaweera</Text>
              <Text>Age: 25</Text>
              <Text>Occupation: Web Developer</Text>
            </View>
            <Text style={styles.paragraph}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    marginTop: 50,
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  aboutMe: {
    flexDirection: windowWidth < 768 ? 'column' : 'row', // Adjust direction based on screen width
    paddingRight: 150,
    paddingLeft:150,
    paddingTop: 30,
    marginBottom: 20,
  },
  imageContainer: {
    paddingRight: windowWidth < 768 ? 0 : 20, // Adjust spacing based on screen width
    paddingBottom: windowWidth < 768 ? 20 : 0, // Add space between image and text for small screens
  },
  image: {
    height: windowWidth < 768 ? 200 : 250, // Adjust image height based on screen width
    width: 200,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: windowWidth < 768 ? 0 : 20, // Adjust horizontal padding based on screen width
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
    marginTop:10,
  },
  list: {
    padding: 0,
    margin: 0,
  },
});

export default AboutMeSection;
