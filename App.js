import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageBase from './components/ImageBase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <ImageBase></ImageBase>
    </View>
  );
}

//It seems some kind of CSS Sylesheet written in React (Used in the view on the main page of the App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
