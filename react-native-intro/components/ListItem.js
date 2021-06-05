import React, { Component } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from "react-native";
import { connect } from 'react-redux';

class ListItem extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        var isLastItem = this.props.index === (this.props.data.items.length - 1);
        return (
            <TouchableHighlight style={isLastItem ? styles.lastListItem : styles.listItem} 
                                underlayColor={helpers.clickColor} 
                                onPress={() => { this.props.navigation.navigate("NoteDetail", {item: this.props.item}) }}>
                <Text style={styles.listItemText}> {this.props.item.title}</Text>
            </TouchableHighlight >
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        paddingVertical: 12,
        alignItems: "center",
        borderBottomWidth: 0.3,
        borderBottomColor: "#888888",
        backgroundColor: "#ffffff",
    },
    lastListItem: {
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    listItemText: {
        fontSize: 16
    }
});

const helpers = {
    clickColor: "#F0F0F0",
};

const mapStateToProps = (state) => {
    const { data } = state
    return { data }
};

export default connect(mapStateToProps)(ListItem);