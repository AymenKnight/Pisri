import React from 'react'
import { StyleSheet,   } from 'react-native'
import AppText from '../Basic/AppText'
import Colors from '../config/Colors'
import font from '../config/font'
 import { MediaQueryStyleSheet } from "react-native-responsive";

export default function FormTitle({title,style}) {
    return (  
           <AppText style={[styles.title,style]} >
              {title}
           </AppText>
    )
}

const styles = MediaQueryStyleSheet.create(
  {
    title: {
      fontFamily: font.PublicSans_800ExtraBold,
      color: Colors.fontColor,
      fontWeight: "900",
    },
  },
  {
    "@media (max-device-height: 720)": {
      title: {
        fontSize: 30,
        padding: 5,
        marginBottom: 10,
      },
    },
    "@media (min-device-height: 721)": {
      title: {
        fontSize: 35,
        padding: 10,
        marginBottom: 30,
      },
    },
  }
);
