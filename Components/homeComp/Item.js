import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from '../Basic/AppText'
import Colors from '../config/Colors'
import font from '../config/font';

export default function Item({name,image,imageWidth=70,imageHeight=115,textSize=17,style}) {
  
    return (
        <View style={styles.container} >
           {  image &&  <Image source={image} resizeMode="contain"   style={styles.image}  width={imageWidth} height={imageHeight}  />}
            <AppText style={styles.name} >{name} </AppText>      
        </View>
    )
  }


const styles = StyleSheet.create({
    container :{
        borderWidth:0,
        alignContent :"center",
        justifyContent:"center",
    },
    image :{
        alignSelf:"center",
        marginBottom:3,
    },
    name :{
          alignSelf:"center",
        fontFamily:font.PublicSans_700Bold,
        textAlign:'center',
        color:Colors.fontColor,
        fontSize:17,
    
    }
})
