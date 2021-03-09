import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const menuButtonStyle = StyleSheet.create({
    button: {
        height: 75,
        width: '100%',
        padding: 25,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Commissioner-Medium',
    }
})

export const MenuButton = (props) => {
    const { children } = props;

    const handleOnPressDummy = () => null;

    const highlightTouchProps = {
        activeOpacity: 1,
        underlayColor: '#f7f7f7'
    }

    return (
        <TouchableHighlight style={menuButtonStyle.button} {...highlightTouchProps} onPress={handleOnPressDummy}>
            <Text style={menuButtonStyle.buttonText}>{children}</Text>
        </TouchableHighlight>
    )
}