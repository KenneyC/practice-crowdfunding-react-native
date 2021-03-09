import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { neutralColor, primaryColour } from '../../../style';

const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: primaryColour.moderateCyan,
        borderRadius: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Commissioner-Medium',
        fontSize: 17,
        fontWeight: "700"
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: neutralColor.darkGray
    }
})

export const Button = (props) => {
    const { text, style, textStyle, disabled, onPress } = props;

    return (
        <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
            <View style={[buttonStyle.button, disabled ? buttonStyle.disabled : {}]}>
                <Text style={[buttonStyle.buttonText, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}