import React, { Component } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from "react-native";
import { connect } from 'react-redux';
import ListItem from "../components/ListItem";
import Button from "../components/Button";

class Home extends Component {


    constructor({ navigation }) {
        super();
        this.navigation = navigation;
    }

    // this.navigation.push("NoteCreate")

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data.items}
                    renderItem={({ item, index }) => (<ListItem item={item} index={index} navigation={this.navigation}></ListItem>)}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<Text style={styles.errorText}>Nejsou zde žádné záznamy</Text>}
                />
                <Button text="Přidat" onPress={() => { this.navigation.push("NoteCreate"); }}></Button>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#293241',
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 5
    },
    container: {
        margin: 10,
        flex: 1,
        justifyContent: "space-between",
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff"
    },
    errorText: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 16,
        color: "#888888"
    }
});

const helpers = {
    clickColor: "#7F8BA1",
};

const mapStateToProps = (state) => {
    const { data } = state
    return { data }
};

export default connect(mapStateToProps)(Home);