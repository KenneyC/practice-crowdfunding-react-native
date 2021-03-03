import React, { useEffect, useState } from 'react';
import HeroImage from '../../../../assets/images/image-hero-mobile.jpg'
import { Image, StyleSheet, Dimensions } from 'react-native';

const winSize = Dimensions.get('window');
const { width, height } = Image.resolveAssetSource(HeroImage);
const ratio = height / width;

const heroStyle = StyleSheet.create({
    hero: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: winSize.width,
        height: winSize.width * ratio,
        zIndex: -1
    }
}) 

export const Hero = () => {
    return (
        <Image style={heroStyle.hero} source={HeroImage} resizeMode="cover"/>
    )
}