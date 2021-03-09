import React from 'react';
import { StyleSheet, View, Dimensions, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { ModalDefinition } from './types';

const window = Dimensions.get('window');

const modalStyle = StyleSheet.create({
    modalWrapper: {
        zIndex: 1,
        top: 0,
        left: 0,
        height: '100%',
        width: window.width,
        position: 'absolute',
    },
    background: {
        opacity: 0.7,
        backgroundColor: 'black',
        height: '100%',
        width: window.width,
    },
    modal: {
        position: 'absolute',
        zIndex: 1,
        top: 130,
        left: 0,
        height: window.height,
        width: window.width,
        paddingLeft: 30,
        paddingRight: 30
    }
})

export const Modal = () => {
    const { activated, modal } = useSelector(state => state.modal);
    return(
        activated ? 
        <>
            <SafeAreaView style={modalStyle.modalWrapper}>
                <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0.7)']} style={modalStyle.background}/>
                <View style={modalStyle.modal}>
                    {ModalDefinition[modal]}
                </View>
            </SafeAreaView>
        </>:
        <></>
    )
}
