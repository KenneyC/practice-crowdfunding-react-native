import React from 'react';
import { StyleSheet, View } from 'react-native';
import { neutralColor } from '../../../style';

const dividerStyle = StyleSheet.create({
    dividerWrapper: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    divider: {
        marginTop: 10,
        marginBottom: 10,
        height: 1.5,
        backgroundColor: neutralColor.lightGray
    }
})

export const Divider = (props) => {
    const { style } = props;
    return (
        <View style={dividerStyle.dividerWrapper}>
            <View style={[dividerStyle.divider, style]} />
        </View>
    )
}