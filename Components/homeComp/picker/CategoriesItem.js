import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import AppText from '../../Basic/AppText'
import Colors from '../../config/Colors'
import font from '../../config/font'

export default function CategoriesItem({categorie,selected,onSelect}) {
    const hundleFocus=()=>{
        onSelect(categorie)
    }
    return (
      <TouchableOpacity 
      style={[styles.container,selected ?styles.selectedContainer:styles.not_selectedContianer]}
      onPress={hundleFocus}>
        <AppText
          style={selected ? styles.selectedText:styles.not_selectedText}
        >
          {categorie.name}
        </AppText>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  selectedText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.white,
    fontSize: 15,
    fontStyle: "normal",
    lineHeight: 17,
    textAlign: "center",
  },

  not_selectedContianer: {
    borderColor: Colors.stroke,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
  },
  not_selectedText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 15,
    fontStyle: "normal",
    lineHeight: 17,
    textAlign: "center",
  },
});