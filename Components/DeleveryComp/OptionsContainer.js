import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useResponsiveScreenWidth } from 'react-native-responsive-dimensions';
import Colors from '../config/Colors';

export default function OptionsContainer({children,width=86,style}) {
    return (
        <View  style={[styles.OptionsContainer,{width:useResponsiveScreenWidth(width)},style]} >
           {children}
        </View>
    )
}

const styles = StyleSheet.create({
  OptionsContainer: {
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom:15,
     
  },
});
