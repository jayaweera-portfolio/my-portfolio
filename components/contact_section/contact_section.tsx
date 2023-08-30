import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // perform any actions here with the submitted data
    setSubmitted(true);


  };

  const clearInputs = () => {
    // Clear the text inputs after submitting
    setName('');
    setEmail('');
    setSubject('');
    setProjectDetails('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <View style={styles.contentContainer}>

        <View style={styles.formContainer}>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            multiline
            placeholder="Project Details"
            value={projectDetails}
            onChangeText={setProjectDetails}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

        </View>


        {submitted && (

          <View style={styles.formPreview}>
            <Text style={styles.formPreviewTitle}>Submitted Details:</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Subject: {subject}</Text>
            <Text>Project Details: {projectDetails}</Text>
            <TouchableOpacity style={styles.clearButton} onPress={clearInputs}>
              <Text style={styles.clearButtonText}>Clear Inputs</Text>
            </TouchableOpacity>
          </View>

        )}

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
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapContainer: {
    flex: 1,
    marginRight: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  submitButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formPreview: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 10,
  },
  formPreviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearButton:{
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText:{
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default Contact;


