import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { HomePage } from './containers/home-page/index'

const appStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height
    },
})

const App = () => {
    return (
        <HomePage style={appStyle.container} />
    )
}

export default App;
