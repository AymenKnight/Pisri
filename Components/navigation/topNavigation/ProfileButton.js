import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Colors from "../../config/Colors";
import { TouchableOpacity } from 'react-native'

export default function ProfileButton({onPress,style}) {
    return (
        <TouchableOpacity  style={[styles.icon,style]}  onPress={onPress} >
           <MaterialIcons name="person-outline" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon :{
        borderStyle:'solid',
        borderWidth:2,
        borderColor:Colors.stroke,
        justifyContent:"center",
        alignItems:"center",
        width:52,
        height:52,
        borderRadius:26,

    }
})
