import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import { Hero } from '../../component/atomic/hero';
import { Ribbon } from '../../component/molecule/ribbon';
import { TitleCard } from '../../component/organism/title-card';
import { StatusCard } from '../../component/organism/status-card';
import { AboutCard } from '../../component/organism/about-card';

const winSize = Dimensions.get('window');

const homePageStyle = StyleSheet.create({
    container: {
        height: winSize.height
    },
    mainBody: {
        flex: 1,
        marginTop: 255,
        marginLeft: 30,
        marginRight: 30
    }
})

export const HomePage = () => {
    return (
        <SafeAreaView style={homePageStyle.container}>
            <ScrollView style={homePageStyle.container}>
                <View>
                    <Hero />
                    <Ribbon />
                </View>
                <View style={homePageStyle.mainBody}>
                    <TitleCard />
                    <StatusCard currentFunding={(89914).toLocaleString()} backers={(5007).toLocaleString()} daysLeft={56}/>
                    <AboutCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}