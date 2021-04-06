import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../Basic/AppText'
import Colors from '../config/Colors'

export default function Help_Text({title}) {
    return (
       <AppText style={styles.help_Text} >
          {title}
       </AppText>
    )
}

const styles = StyleSheet.create({
      help_Text :{
        fontSize :15,
        color :Colors.fontColor,
        fontWeight:"bold",

    }
})
