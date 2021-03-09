import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { sharedModalStyle } from '../../../style';
import { Divider } from '../../atomic/divider';
import { MenuButton } from '../../atomic/menu-button';
import {Card} from '../../molecule/card';

const menuModalStyle = StyleSheet.create({
    menuDivider: {
        width: '100%',
        height: 0.5,
    }
})

export const MenuModal = () => {
    return (
        <Card style={sharedModalStyle.menuWrapper}>
            <MenuButton>About</MenuButton>
            <Divider style={menuModalStyle.menuDivider}/>
            <MenuButton>Discover</MenuButton>
            <Divider style={menuModalStyle.menuDivider}/>
            <MenuButton>Get Started</MenuButton>
        </Card>
    )
}