import React from 'react';
import {StyleSheet, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import { HomePage } from './containers/home-page/index';
import { Provider } from 'react-redux';
import { store } from './redux/store/main';
import { Modal } from './containers/modal/index';
import { Ribbon } from './component/molecule/ribbon';

const appStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height
    },
})

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView>
                <ScrollView>
                    <Ribbon />
                    <Modal />
                    <HomePage />
                </ScrollView>
            </SafeAreaView>
        </Provider>
    )
}

export default App;
