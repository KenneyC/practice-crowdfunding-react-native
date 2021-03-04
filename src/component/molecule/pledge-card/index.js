import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { neutralColor, primaryColour } from '../../../style';
import { Button } from '../../atomic/button';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Card } from '../card';

const pledgeStyle = StyleSheet.create({
    title: {
        fontFamily: 'Commissioner-Medium',
        fontSize: 15,
        fontWeight: "700",
    },
    price: {
        color: primaryColour.moderateCyan,
        fontSize: 15,
        fontWeight: "500",
        marginTop: 10,
        marginBottom: 10
    },
    description: {
        textAlign: 'left'
    },
    unitsLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    unitsLeftNumber: {
        fontFamily: 'Commissioner-Medium',
        fontSize: 35,
        fontWeight: "700",
    },
    unitsLeftText: {
        fontSize: 16,
        color: neutralColor.darkGray,
        marginLeft: 10
    },
    button: {
        width: '65%',
        height: 50
    },
    buttonText: {
        fontSize: 15
    }
})

export const PledgeCard = (props) => {
    const { title, price, unitsLeft, description} = props;
    
    const withOpacity = (style) => {
        return [style, { opacity: unitsLeft ? 1 : 0.5}];
    }

    return (
        <Card>
            <Text style={withOpacity(pledgeStyle.title)}>{title}</Text>
            <Text style={withOpacity(pledgeStyle.price)}>Pledge ${price} or more</Text>
            <CustomTextBody style={withOpacity(pledgeStyle.description)}>{description}</CustomTextBody>
            <View style={withOpacity(pledgeStyle.unitsLeft)}>
                <Text style={pledgeStyle.unitsLeftNumber}>{unitsLeft}</Text>
                <Text style={pledgeStyle.unitsLeftText}>left</Text>
            </View>
            <Button 
                text={unitsLeft ? "Select Reward" : "Out of Stock"} 
                style={pledgeStyle.button}
                disabled={unitsLeft ? false : true}
                textStyle={pledgeStyle.buttonText}
            />
        </Card>
    )
}