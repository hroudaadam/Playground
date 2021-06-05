import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native";

class Button extends Component {

    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={() => {
                    this.props.onPress();
                }}
                underlayColor={helpers.clickColor}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#293241',
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff"
    },
});

const helpers = {
    clickColor: "#7F8BA1",
};



export default Button;