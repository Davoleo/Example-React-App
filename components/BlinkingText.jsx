import React, {Component} from "react"
import { Text, StyleSheet} from "react-native"
import Greeting from "./Greeting";

var count = 0;

export default class BlinkText extends Component {

    componentDidMount() {
        //Toggles the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText}
            ))
        ), 2000);
    }

    //state object
    state = {isShowingText: true};

    render() {
        if (!this.state.isShowingText) 
        {
            return null;
        }
        else 
        {
            count++;
            if (count % 2 == 0)
            {
                return(
                    <Text>{this.props.text}</Text>
                )
            }
            else
            {
                return(
                    <Text style={bold.bold}>{this.props.text}</Text>
                )
            }
        }
    }
}

const bold = StyleSheet.create({
    bold: {
        fontWeight: "bold"
    }
})