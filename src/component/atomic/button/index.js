import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { primaryColour } from '../../../style';

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
    }
})

export const Button = (props) => {
    const { text, style } = props;

    return (
        <TouchableOpacity style={style}>
            <View style={[buttonStyle.button]}>
                <Text style={buttonStyle.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}