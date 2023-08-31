import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  navBar: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  navItem: {
    color: 'white',
    fontSize: 16,
  },
  
});


const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>About Me</Text>
        <Text style={styles.navItem}>Services</Text>
        <Text style={styles.navItem}>Portfolio</Text>
        <Text style={styles.navItem}>Contacts</Text>
      </View>
    </View>
  );
};

export default NavigationBar;
