import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { neutralColor } from '../../../style';

const customTextBodyStyle = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Commissioner-Light',
        fontWeight: "400",
        color: neutralColor.darkGray,
        lineHeight: 23
    }
})

export const CustomTextBody = (props) => {
    const { children, style } = props;
    return (
        <Text style={[customTextBodyStyle.textStyle, style]}>
            {children}
        </Text>
    )
};
