import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CloseSVG from '../../../../assets/svg/close';
import HamburgerSVG from '../../../../assets/svg/hamburger';
import LogoSVG from '../../../../assets/svg/logo';
import { closeModal, openModal } from '../../../redux/actions/modal';

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
        top: 40,
    },  
    ribbon: {
        height: 'auto',
        width: 'auto',
    }
})

export const Ribbon = () => {
    const { modal, activated } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleOnMenuPress = () => {
        if (!activated) {
            dispatch(openModal('menu'));
        } else if (modal !== 'menu') {
            dispatch(openModal('menu'));
        } else {
            dispatch(closeModal());
        }
    }

    return (
        <View style={[ribbon.ribbonContainer, {zIndex: modal === 'menu' ? 3 : 2}]}>
            <TouchableOpacity style={ribbon.ribbon}>
                <LogoSVG />
            </TouchableOpacity>
            <TouchableOpacity style={ribbon.ribbon} onPress={handleOnMenuPress}>
                {activated && modal === 'menu' ? <CloseSVG /> : <HamburgerSVG />}
            </TouchableOpacity>
        </View>
    )
}