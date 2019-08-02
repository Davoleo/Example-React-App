import React, {Component} from "react";
import { AppRegistry, Image } from "react-native";

export default class ImageBase extends Component {
    render() {
        let image = { uri: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" };

        return(
            <Image source={image} style={{width: 400, height: 400}}/>
        );
    }
}

AppRegistry.registerComponent("ExampleReactApp", () => ImageBase)