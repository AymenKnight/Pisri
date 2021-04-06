import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

import Colors from '../config/Colors'

export default function CloseButton({onPress}) {
    return (
        <TouchableOpacity  style={styles.container} onPress={onPress} >
             <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        width:35,
        height:35,
        borderRadius:17.5,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    }
})
