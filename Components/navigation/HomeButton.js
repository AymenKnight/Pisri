import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


import Colors from '../config/Colors'

export default function HomeButton({onPress}) {
    return (
        <TouchableOpacity  style={styles.container} onPress={onPress} >
             <AntDesign name="home" size={33} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        width :60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary,
        alignSelf:'center',

    }
})
