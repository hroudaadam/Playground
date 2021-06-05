import React, { Component } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dataReducer from './data-reducer';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import Home from "./screens/Home";
import NoteCreate from "./screens/NoteCreate";
import NoteDetail from "./screens/NoteDetail";

const Stack = createStackNavigator();
const store = createStore(dataReducer);

class App extends Component {
  state = {
    modalVisible: false,
    response: null
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        let str = JSON.stringify(json);
        this.setState({ response: str });
      });
  }

  render() {
    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#ffffff",
        card: "#E0FBFC"
      },
    };

    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="Home" options={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Záznamy', ...TransitionPresets.ScaleFromCenterAndroid }} />
            <Stack.Screen name="NoteCreate" component={NoteCreate} options={{ headerTitle: 'Záznamy', ...TransitionPresets.ScaleFromCenterAndroid}} />
            <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ headerTitle: 'Záznamy', ...TransitionPresets.ScaleFromCenterAndroid }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}


export default App;