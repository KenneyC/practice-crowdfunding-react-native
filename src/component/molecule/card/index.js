import React from 'react';
import { View, StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 9,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        marginBottom: 25,
    }
})

const cardPadding = {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    paddingBottom: 40 
}

export const Card = (props) => {
    const { children, style, padding} = props;

    return (
        <View style={[cardStyle.card, padding ? cardPadding : {}, style]}>
            {children}
        </View>
    )
}