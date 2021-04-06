import React from 'react'
import { StyleSheet, View,Image } from 'react-native'
import {
  useResponsiveHeight,
  useResponsiveWidth,
  useResponsiveScreenWidth,
  useResponsiveScreenHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import Colors from '../../config/Colors'
import font from '../../config/font'
import AppText from '../../Basic/AppText'
import CountSnipper from '../../Basic/Snippers/CountSnipper';



export default function ItemWithQuantity({ name, image, quantity, setQuantity }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {image && (
          <Image source={image} resizeMode="contain" style={styles.image} />
        )}
        <AppText style={styles.name}>{name} </AppText>
      </View>
      <View style={styles.SnipperNipple}>
        <CountSnipper count={quantity} onChangeCount={setQuantity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        width:"70%",
        height:"auto",
        borderColor:Colors.borders,
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:27,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:25,
        overflow:'hidden',
    },
    itemContainer :{
        marginBottom:15,
    },
      image :{
        alignSelf:"center",
        marginBottom:3,
    },
       name :{
          alignSelf:"center",
        fontFamily:font.PublicSans_600SemiBold,
        textAlign:'center',
        color:Colors.fontColor,
        fontSize:responsiveFontSize(2),
    
    },
    SnipperNipple :{
        marginBottom:15,
    }
})
