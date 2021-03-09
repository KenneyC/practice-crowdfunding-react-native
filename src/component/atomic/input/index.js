import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { neutralColor } from '../../../style';

const inputStyle = StyleSheet.create({
    input: {
        borderColor: neutralColor.lightGray,
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'Commissioner-Medium',
        fontSize: 15
    },
    dollarWrapper: {
        justifyContent: 'center',
    },
    dollarSign: {
        color: neutralColor.lightGray,
        marginLeft: 20,
        marginRight: 10,
    }
})

export const Input = (props) => {
    const { defaultValue, style } = props
    const [ value, setValue ] = useState(defaultValue);

    const handleChange = (text) => {
        setValue(text);
    }

    return (
        <View style={[inputStyle.input, style]}>
            <View style={inputStyle.dollarWrapper}><Text style={[inputStyle.dollarSign, inputStyle.text]}>$</Text></View>
            <TextInput value={value} style={inputStyle.text} onChangeText={handleChange} keyboardType="number-pad" defaultValue={defaultValue} maxLength={3}/>
        </View>
    )
}