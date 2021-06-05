import React, { useState, useEffect, Component } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import Constants from 'expo-constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../data-actions';
import * as ImagePicker from 'expo-image-picker';

import Button from "../components/Button";

class NoteCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Pellentesque sapien. Fusce suscipit libero eget elit. Curabitur vitae diam non enim vestibulum interdum. Integer imperdiet lectus quis justo. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Integer in sapien. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam erat volutpat. Nullam eget nisl. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit.",
            photo: null
        }
        this.addItem.bind(this);
        this.changeInput.bind(this);
    }

    async componentDidMount() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
    }

    async pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result.uri);
      
          if (!result.cancelled) {
            this.setState({
                photo: result.uri
            })
          }
    }

    addItem() {
        this.props.addItem({ title: this.state.title, desc: this.state.desc, photo: this.state.photo });
        this.props.navigation.popToTop();
    }

    changeInput(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.textArea}>
                        <Text style={styles.label}>Název</Text>
                        <TextInput style={styles.input} value={this.state.title} onChangeText={text => this.changeInput("title", text)} />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.label}>Podrobnosti</Text>
                        <TextInput style={styles.input} value={this.state.desc} onChangeText={text => this.changeInput("desc", text)} multiline={true} numberOfLines={4} />
                    </View>
                    {this.state.photo && 
                        <View style={styles.textArea}>
                            <Text style={styles.label}>Fotka</Text>
                            <Image source={{ uri: this.state.photo }} style={{ width: 150, height: 120 }} />
                        </View>
                    }
                </ScrollView>
                <View style={styles.buttonGroup}>
                    <View style={styles.buttonWrapper}>
                        <Button text="Vybrat fotku" onPress={() => { this.pickImage(); }}></Button>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button text="OK" onPress={() => { this.addItem(); }}></Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.3,
        borderColor: "#888888",
        borderRadius: 3,
        backgroundColor: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16,
        textAlignVertical: "top",
        marginTop: 3
    },
    inputMulitlite: {
    },
    container: {
        margin: 10,
        flex: 1,
        justifyContent: "space-between",
    },
    buttonWrapper: {
        marginVertical: 1
    },
    textArea: {
        marginBottom: 0
    },
    label: {
        fontSize: 16,
        color: "#888888"
    },
    form: {
        margin: 0,
        paddingBottom: 10
    },
    buttonGroup: {
        marginTop: 10
    }
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addItem,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(NoteCreate);