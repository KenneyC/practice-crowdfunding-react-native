import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { neutralColor, primaryColour } from '../../../style';

const ProgressBarStyle = StyleSheet.create({
    background: {
        backgroundColor: neutralColor.lightGray,
        width: '100%',
        height: 13,
        borderRadius: 100,
        marginTop: 20
    },
    bar: {
        backgroundColor: primaryColour.moderateCyan,
        borderRadius: 100,
        height: 13,
    }
});

export const ProgressBar = (props) => {
    const { progress } = props;

    return (
        <View style={ProgressBarStyle.background}>
            <View style={[ProgressBarStyle.bar, {width: `${progress*100}%`}]} />
        </View>
    )
}