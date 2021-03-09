import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { neutralColor, primaryColour } from '../../../style';
import { Button } from '../../atomic/button';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Divider } from '../../atomic/divider';
import { Input } from '../../atomic/input';
import { RadioButton } from '../../atomic/radio-button';
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
        marginTop: 10
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
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    unitsLeftSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    continueButton: {
        width: '50%',
        height: 55
    },
    pledgePrice: {
        width: '40%'
    },
    input: {
        marginTop: 10,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const PledgeCard = (props) => {
    const { title, price, unitsLeft, description, home, selected } = props;
    
    const withOpacity = (style) => {
        return [style, { opacity: unitsLeft ? 1 : 0.5}];
    }

    const selectedStyle = {
        paddingBottom: 0, 
        borderColor: selected ? primaryColour.moderateCyan : neutralColor.lightGray,
    }

    return (
        <Card padding style={home ? {} : selectedStyle}>
            <View style={pledgeStyle.radioWrapper} >
                {!home ? <RadioButton selected={selected} /> : <></>}
                <View style={!home ? {marginLeft: 20} : {}}>
                    <Text style={withOpacity(pledgeStyle.title)}>{title}</Text>
                    <Text style={withOpacity(pledgeStyle.price)}>Pledge ${price} or more</Text>
                </View>
            </View>
            <CustomTextBody style={withOpacity(pledgeStyle.description)}>{description}</CustomTextBody>
            <View style={home ? withOpacity(pledgeStyle.unitsLeft) : pledgeStyle.unitsLeftSelect}>
                <Text style={[pledgeStyle.unitsLeftNumber, { fontSize: !home ? 20 : 35}]}>{unitsLeft}</Text>
                <Text style={pledgeStyle.unitsLeftText}>left</Text>
            </View>
            {home ? 
                <Button 
                text={unitsLeft ? "Select Reward" : "Out of Stock"} 
                style={pledgeStyle.button}
                disabled={unitsLeft ? false : true}
                textStyle={pledgeStyle.buttonText}
                /> :
                selected ? <View>
                                <Divider style={{width: '127%'}}/>
                                <CustomTextBody style={{marginTop: 30}}>Enter your pledge</CustomTextBody>
                                <View style={pledgeStyle.input}>
                                    <Input style={pledgeStyle.pledgePrice} defaultValue={price.toString()} />
                                    <Button text="Continue" style={pledgeStyle.continueButton}/>
                                </View>
                            </View> :
                            <></>
            }
        </Card>
    )
}