import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../config/Colors';
import font from '../config/font';
import AppText from './AppText'

export default function InfoLabel({title,width="83%"}) {
    return (
        <View  style={[styles.container,{width:width}]} >
            <AppText  style={styles.text} >{title} </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
  },
  text: {
    color: Colors.primary,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 18,
    textAlign: "center",
    paddingVertical:8,
  },
});
