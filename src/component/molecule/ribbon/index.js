import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import HamburgerSVG from '../../../../assets/svg/hamburger';
import LogoSVG from '../../../../assets/svg/logo';

const ribbon = StyleSheet.create({
    ribbonContainer: {
        width: '100%',
        height: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 25,
        paddingLeft: 25,
        position: 'absolute',
        top: 35
    },  
    ribbon: {
        height: 'auto',
        width: 'auto',
    }
})

export const Ribbon = () => {
    return (
        <View style={ribbon.ribbonContainer}>
            <TouchableOpacity style={ribbon.ribbon}>
                <LogoSVG />
            </TouchableOpacity>
            <TouchableOpacity style={ribbon.ribbon}>
                <HamburgerSVG />
            </TouchableOpacity>
        </View>
    )
}