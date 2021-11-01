import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppText from '../Basic/AppText'
import Item from './Item'
import Colors from '../config/Colors';
import font from '../config/font';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ItemWithPrice({name,image,price,tag,onPress}) {

    return (
        <TouchableWithoutFeedback  style={styles.container}  onPress={onPress} >
        <View style={styles.priceContainer} >
        <AppText style={styles.price} > {price} </AppText>
        <AppText style={styles.tag} >{tag} </AppText>
        </View>
         <View style={styles.item} >
           <Item name={name} image={image} />
           </View>
        </TouchableWithoutFeedback>
    )
    }


const styles = StyleSheet.create({
    container :{
        width:150,
        height:200,
        alignItems:'center',
        borderColor :"#E5E5E5",
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:20,
        overflow:'hidden',
        marginHorizontal:10,
        marginVertical:5,
    },
    priceContainer :{
        flexWrap:'wrap',
        position:'absolute',
        top:5,
        left:5,
        flexDirection:'row',
        justifyContent:"center",
        paddingBottom:4,
        marginBottom:5,
    },
    item :{
        top:40,
    position:'absolute',
    bottom:0,
    },
    price :{
    color:Colors.fontColor,
     fontFamily:font.PublicSans_800ExtraBold, 
     fontSize:16,
    },
    tag :{
    alignSelf:'flex-end',
    color:Colors.primary,
    fontFamily:font.PublicSans_800ExtraBold, 
    fontSize:13,

    }
})
