
import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>
                <Text style={greetingStyle.big}>Greetings {this.props.name}</Text>
            </View>
        );
    }
}

const greetingStyle = StyleSheet.create({
    big: {
        color: "#E21463",
        fontSize: 30,
        fontWeight: "bold"
    }
});

AppRegistry.registerComponent("ExampleReactApp", () => Greeting);