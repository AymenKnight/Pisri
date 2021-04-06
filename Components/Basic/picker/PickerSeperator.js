import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../config/Colors'

export default function PickerSeperator() {
    return (
        <View  style={styles.container} >
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width:3,
    borderColor: Colors.primary,
    backgroundColor:Colors.primary,
    borderRadius:3,
    marginLeft:18,
  },
});
