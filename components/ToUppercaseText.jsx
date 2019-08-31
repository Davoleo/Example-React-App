import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native'

export default class ToUpperCaseText extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return(
            <View style={{padding: 10}}>
                <TextInput 
                style={{height: 40}}
                placeholder="Type here to transform your text!"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.toUpperCase()}
                </Text>
            </View>
        );
    }
}