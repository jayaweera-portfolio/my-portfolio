import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Subject" />
        <TextInput
          style={[styles.input, styles.textarea]}
          multiline
          placeholder="Project Details"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  formContainer: {
    maxWidth: '100%',
    width: 500,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
  textarea: {
    height: 100,
  }
});

export default Contact;


