import React, {Component} from 'react';
import {Button, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform} from "react-native";

export default class ButtonBasics extends Component {
    _onPressButton() {
        alert("You tapped the button")
    }

    render() {
        return(
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
        <Touchables></Touchables>
      </View>
        ); 
    }
}

class Touchables extends Component {
    _onPressButton() {
      alert('You tapped the button!')
    }
  
    _onLongPressButton() {
      alert('You long-pressed the button!')
    }
  
  
    render() {
      return (
        <View style={stylesTouchables.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={stylesTouchables.button}>
              <Text style={stylesTouchables.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={stylesTouchables.button}>
              <Text style={stylesTouchables.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={stylesTouchables.button}>
              <Text style={stylesTouchables.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback
              onPress={this._onPressButton}
              >
            <View style={stylesTouchables.button}>
              <Text style={stylesTouchables.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={stylesTouchables.button}>
              <Text style={stylesTouchables.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    buttonContainer: {
        margin: 5
    },
    alternativeButtonContainer: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

const stylesTouchables = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
});