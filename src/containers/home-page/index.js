import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { Hero } from '../../component/atomic/hero';
import { TitleCard } from '../../component/organism/title-card';
import { StatusCard } from '../../component/organism/status-card';
import { AboutCard } from '../../component/organism/about-card';


const homePageStyle = StyleSheet.create({
    container: {
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
            <View>
                <Hero />
            </View>
            <View style={homePageStyle.mainBody}>
                <TitleCard />
                <StatusCard currentFunding={(89914).toLocaleString()} backers={(5007).toLocaleString()} daysLeft={56}/>
                <AboutCard />
            </View>
        </SafeAreaView>
    )
}