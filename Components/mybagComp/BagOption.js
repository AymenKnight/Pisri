import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../Basic/AppText'
import Colors from '../config/Colors'
import font from '../config/font'

export default function BagOption({optionName}) {
    return (
        <View  style={styles.container} >
            <AppText  style={styles.text} >
                {optionName}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.stroke,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    marginRight:5,
    marginBottom:7,
    height:25,
  },
  text: {
    fontFamily: font.PublicSans_500Medium,
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical :5,
    color: Colors.fontColor,
    fontStyle: "normal",
    textAlign: "center",
  },
});
