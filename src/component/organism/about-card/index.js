import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { pledges } from '../../../mock/data/pledges';
import { sharedCardStyle } from '../../../style';
import { CustomTextBody } from '../../atomic/custom-text-body';
import { Card } from '../../molecule/card';
import { PledgeCard } from '../../molecule/pledge-card';

const aboutCardStyle = StyleSheet.create({
    sharedText: {
        textAlign: 'left'
    },
    description: {
        marginTop: 15,
        marginBottom: 25
    }
})

export const AboutCard = () => {
    return (
        <Card padding>
            <Text style={[sharedCardStyle.mainTitle, aboutCardStyle.sharedText]}>About this project</Text>
            <View style={aboutCardStyle.description}>
                <CustomTextBody style={aboutCardStyle.sharedText}>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </CustomTextBody>
                <CustomTextBody style={aboutCardStyle.sharedText}>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand
                </CustomTextBody>
            </View>
            <View>
                {pledges.map((pledge) => 
                    (<PledgeCard home key={pledge.title} title={pledge.title} unitsLeft={pledge.unitsLeft} description={pledge.description} price={pledge.price}/>)
                )}
            </View>
        </Card>
    )
}
