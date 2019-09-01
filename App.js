import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageBase from './components/ImageBase';
import Greeting from "./components/Greeting"
import BlinkText from './components/BlinkingText';
import DimensionsSample from './components/DimensionsSample';
import ToUpperCaseText from './components/ToUppercaseText';
import Touchables from './components/Touchables';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      {/* <ImageBase></ImageBase> */}
      <Greeting name="Davoleo"></Greeting>
      <Greeting name="Gianpaolo"></Greeting>
      {/* <BlinkText text="I'm some simple blinking text" />
      <BlinkText text="It's not that I'm blinking for you or anything ù.ù" />
      <BlinkText text="Blink Blink Blink" /> */}
      {/* <ToUpperCaseText></ToUpperCaseText> */}
      <Touchables></Touchables>
    
      {/* <DimensionsSample fix={true}></DimensionsSample>     */}
    </View>
    
    //<DimensionsSample fix={false}></DimensionsSample>  //Everything else must be commented for this example to work
  );
}

//It seems some kind of CSS Sylesheet written in React (Used in the view on the main page of the App)
//React uses CSS flexbox to align app content in a layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
