import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../config/Colors'

export default function LineSeperator() {
    return (
        <View  style={styles.container} >
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        alignSelf:"center",
        width:"100%",
        borderColor:Colors.borders,
        borderStyle:'solid',
        borderWidth:1,
        marginBottom :8,
    }
})
