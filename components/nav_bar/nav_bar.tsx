import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface TouchableButtonProps {
  screenName: string;
  text: string;
}

const TouchableButton: React.FC<TouchableButtonProps> = ({ screenName, text }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(screenName as never); // Explicitly specify the type
  };

  return (
    <TouchableOpacity onPress={navigateToScreen} style={styles.navItem}>
      <Text style={styles.navText}>{text}</Text>
    </TouchableOpacity>
  );
};

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableButton screenName="Home" text="Home" />
        <TouchableButton screenName="About" text="About Me" />
        <TouchableButton screenName="Services" text="Services" />
        <TouchableButton screenName="Portfolio" text="Portfolio" />
        <TouchableButton screenName="Contacts" text="Contacts" />
      </View>
    </View>
  );
};

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
    // Add any styles you want for the button container here
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NavigationBar;
