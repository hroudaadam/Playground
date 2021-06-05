import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import { connect } from 'react-redux';

class NoteDetail extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.label}>Název</Text>
                    <Text style={styles.text}>{this.props.route.params.item.title}</Text>
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.label}>Podrobnosti</Text>
                    <Text style={styles.text}>{this.props.route.params.item.desc}</Text>
                </View>
                {this.props.route.params.item.photo && 
                    <View style={styles.textArea}>
                            <Text style={styles.label}>Fotka</Text>
                            <Image source={{ uri: this.props.route.params.item.photo }} style={{ width: 200, height: 150 }} />
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 18
    },
    label: {
        fontSize: 16,
        color: "#888888"
    },
    textArea: {
        marginBottom: 15
    }
});

const helpers = {
    clickColor: "#7F8BA1",
};

const mapStateToProps = (state) => {
    const { data } = state
    return { data }
};

export default connect(mapStateToProps)(NoteDetail);