import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"; 
import Colors from '../config/Colors';

export default function BackButton({onPress}) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.menu}>
        <MaterialIcons name="keyboard-arrow-left" size={33} color="white" />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: "3%",
    backgroundColor:Colors.primary,
    borderRadius:16.5,
    justifyContent:'center',
    alignItems:'center',
  },
});
