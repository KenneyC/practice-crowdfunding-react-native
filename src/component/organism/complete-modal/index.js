import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../atomic/button';
import { sharedCardStyle } from '../../../style';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Card } from '../../molecule/card';
import CheckSVG from '../../../../assets/svg/check';
import { closeModal } from '../../../redux/actions/modal';

const completeModalStyle = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    button: {
        height: 55,
        width: '40%',
        marginTop: 15,
    },
    title: {
        marginTop: 25,
        marginBottom: 10,
    },
    bodyText: {
        marginTop: 20,
        marginBottom: 20,
    }
})

export const CompleteModal = () => {
    const dispatch = useDispatch();

    const handleButtonPress = () => {
        dispatch(closeModal());
    }

    return (
        <Card padding style={completeModalStyle.wrapper}>
            <CheckSVG />
            <Text style={[sharedCardStyle.mainTitle, completeModalStyle.title]}>
                Thanks for your support!
            </Text>
            <CustomTextBody style={completeModalStyle.bodyText}>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </CustomTextBody>
            <Button style={completeModalStyle.button} text="Got it!" onPress={handleButtonPress} />
        </Card>
    )
}