import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import Colors from '../config/Colors';
import AppText from './AppText';
import font from '../config/font';
import { TouchableOpacity } from 'react-native';

export default function QuantityReducer({ currentQuantity = 0, hundleLess, hundleMore }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hundleLess}>
        <Entypo
          name="minus"
          size={20}
          color={Colors.borders}
          style={styles.minus}
        />
      </TouchableOpacity>
      <AppText style={styles.currentQuantity}> {currentQuantity} </AppText>
      <TouchableOpacity onPress={hundleMore}>
        <Entypo
          name="plus"
          size={20}
          color={Colors.borders}
          style={styles.plus}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginBottom:5,
    },
    currentQuantity :{
        color:Colors.fontColor,
        fontFamily:font.PublicSans_600SemiBold,
        fontSize:20,
        textAlign:'center',
    },
    minus: {
        marginRight:8,
    },
    plus :{
        marginLeft:8,
    }
})
