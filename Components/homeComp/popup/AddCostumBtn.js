import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

import Colors from '../../config/Colors'

export default function AddCostumBtn({onPress}) {
    return (
      <TouchableOpacity  onPress={onPress} style={styles.container} >
          <FontAwesome5 name="plus" size={16} color={Colors.primary} />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor :Colors.white,
        width:35,
        height:35,
        borderColor:"#D1CFD5",
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    }
})
