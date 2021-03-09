import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import BookmarkSVG from '../../../../assets/svg/bookmark';
import MasterclassSVG from '../../../../assets/svg/masterclass';
import { Button } from '../../atomic/button';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Card } from '../../molecule/card';
import { sharedCardStyle } from '../../../style'
import { openModal } from '../../../redux/actions/modal';

const titleCardStyle = StyleSheet.create({
    description: {
        marginTop: 24,
        marginBottom: 24
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    masterclass: {
        position: 'absolute',
        left: '50%',
        top: -30
    }
})

export const TitleCard = () => {
    const dispatch = useDispatch();

    const handleBackProjectPress = () => {
        dispatch(openModal('backProject'));
    }


    return (
        <Card padding style={{position: 'relative'}}>
            <View style={titleCardStyle.masterclass}>
                <MasterclassSVG />
            </View>
            <Text style={sharedCardStyle.mainTitle}>
                Mastercraft Bamboo Monitor Riser
            </Text>
            <CustomTextBody style={titleCardStyle.description}>
                A beautifully handcrafted monitor stand to reduce neck and eye strain.
            </CustomTextBody>
            <View style={titleCardStyle.buttons}>
                <Button text="Back this project" style={{width: '77%'}} onPress={handleBackProjectPress}/>
                <TouchableOpacity>
                    <BookmarkSVG />
                </TouchableOpacity>
            </View>
        </Card>
    )
}