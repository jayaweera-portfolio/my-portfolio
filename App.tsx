import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>sachithra</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;