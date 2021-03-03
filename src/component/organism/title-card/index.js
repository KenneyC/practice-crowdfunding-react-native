import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookmarkSVG from '../../../../assets/svg/bookmark';
import MasterclassSVG from '../../../../assets/svg/masterclass';
import { Button } from '../../atomic/button';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Card } from '../../molecule/card';

const titleCardStyle = StyleSheet.create({
    mainTitle: {
        textAlign: 'center',
        fontFamily: 'Commissioner-Medium',
        fontSize: 22,
        fontWeight: "700",
        marginTop: 12
    },
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
    return (
        <Card style={{position: 'relative'}}>
            <View style={titleCardStyle.masterclass}>
                <MasterclassSVG />
            </View>
            <Text style={titleCardStyle.mainTitle}>
                Mastercraft Bamboo Monitor Riser
            </Text>
            <CustomTextBody style={titleCardStyle.description}>
                A beautifully handcrafted monitor stand to reduce neck and eye strain.
            </CustomTextBody>
            <View style={titleCardStyle.buttons}>
                <Button text="Back this project" style={{width: '77%'}} />
                <TouchableOpacity>
                    <BookmarkSVG />
                </TouchableOpacity>
            </View>
        </Card>
    )
}