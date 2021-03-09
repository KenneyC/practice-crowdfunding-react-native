import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { neutralColor, primaryColour } from '../../../style';

const radioButtonStyle = StyleSheet.create({
    parent: {
        borderRadius: 25,
        height: 28,
        width: 28,
        borderColor: neutralColor.lightGray,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    child: {
        height: 14,
        width: 14,
        borderRadius: 25,
        backgroundColor: primaryColour.moderateCyan
    }
})

export const RadioButton = (props) => {
    const { selected } = props;
    return (
        <View style={radioButtonStyle.parent}>
            {selected ? <View style={radioButtonStyle.child}/> : <></>}
        </View>
    )
}
