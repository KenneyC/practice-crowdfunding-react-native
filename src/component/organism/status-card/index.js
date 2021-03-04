import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Divider } from '../../atomic/divider';
import { ProgressBar } from '../../atomic/progress-bar';
import {Card} from '../../molecule/card';

const statusCardStyle = StyleSheet.create({
    mainText: {
        textAlign: 'center',
        fontFamily: 'Commissioner-Medium',
        fontSize: 35,
        fontWeight: "700",
    },
    divider: {
        width: '30%'
    }
})

export const StatusCard = (props) => {
    const { currentFunding, backers, daysLeft } = props;

    return (
        <Card>
            <Text style={statusCardStyle.mainText}>
                ${currentFunding}
            </Text>
            <CustomTextBody>
                of $100,000 backed
            </CustomTextBody>
            <Divider style={statusCardStyle.divider} />
            <Text style={statusCardStyle.mainText}>
                {backers}
            </Text>
            <CustomTextBody>
                total backers
            </CustomTextBody>
            <Divider style={statusCardStyle.divider} />
            <Text style={statusCardStyle.mainText}>
                {daysLeft}
            </Text>
            <CustomTextBody>
                days left
            </CustomTextBody>
            <ProgressBar progress={89914/100000} />
        </Card>
    )
}