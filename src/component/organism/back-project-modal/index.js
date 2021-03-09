import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { neutralColor, sharedModalStyle } from "../../../style"
import { pledges } from '../../../mock/data/pledges';
import {Card} from '../../molecule/card';
import { PledgeCard } from '../../molecule/pledge-card';
import { sharedCardStyle } from '../../../style';
import { CustomTextBody } from '../../atomic/custom-text-body';
import CloseSVG from '../../../../assets/svg/close';
import { closeModal } from '../../../redux/actions/modal';

const backProjectModalStyle = StyleSheet.create({
    title: {
        marginTop: 0,
        fontSize: 20
    },
    text: {
        textAlign: 'left',
    },
    description: {
        marginTop: 25,
        marginBottom: 25,
    },
    close: {
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        top: 45,
        right: 30 ,
    },
    selectable: {
        height: 'auto',
        width: 'auto'
    }
})

export const BackProjectModal = () => {
    const dispatch = useDispatch();
    const [ selected, setSelected ] = useState('');

    const handlCloseOnPress = () => {
        dispatch(closeModal());
    }

    const handleOnPress = (key) => {
        if (key === selected) {
            setSelected('');
        } else {
            setSelected(key);
        }
    }

    return (
        <Card style={sharedModalStyle.menuWrapper} padding>
            <Text style={[sharedCardStyle.mainTitle, backProjectModalStyle.title, backProjectModalStyle.text]}>Back this project</Text>
            <TouchableOpacity style={backProjectModalStyle.close} onPress={handlCloseOnPress}>
                <CloseSVG color={neutralColor.darkGray}/>
            </TouchableOpacity>
            <CustomTextBody style={[backProjectModalStyle.text, backProjectModalStyle.description]}>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </CustomTextBody>
            {pledges.map((pledge, index) => 
                (<TouchableWithoutFeedback style={backProjectModalStyle.selectable} key={`${pledge.title}${index}`} onPress={() => handleOnPress(`${pledge.title}${index}`)}>
                    <View>
                        <PledgeCard selected={(`${pledge.title}${index}`) === selected} title={pledge.title} unitsLeft={pledge.unitsLeft} description={pledge.description} price={pledge.price}/>
                    </View>
                </TouchableWithoutFeedback>)
            )}
        </Card>
    )
}