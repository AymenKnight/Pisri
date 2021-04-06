import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import {
  useResponsiveHeight,
  useResponsiveWidth,
  useDimensionsChange,
  useResponsiveScreenHeight
} from "react-native-responsive-dimensions";

import Colors from '../config/Colors'
import iconLib from '../config/iconLib';

export default function PrimaryButton({
  onPress,
  title,
  icon,
  width = "100%",
  IconComp = iconLib.MaterialCommunityIcons,
  height = 55,
  backgroundcolor=Colors.primary,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: width, height: height,backgroundColor:backgroundcolor }]}
    >
      <Text style={styles.text}>{title}</Text>
      {icon && (
        <IconComp
          style={styles.icon}
          name={icon}
          size={22}
          color={Colors.white}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginVertical:10,
        alignSelf:"center",
    },
    text :{
        padding:8,
        fontSize:18,
        color:"white",
        fontWeight:'bold',
    },
    icon :{
        position :'absolute',
        right:22,
    }
})
