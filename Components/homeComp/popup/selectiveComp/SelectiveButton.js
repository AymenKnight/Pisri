import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { TouchableHighlight } from 'react-native'
import { StyleSheet,} from 'react-native'
import AppText from '../../../Basic/AppText'
import Colors from '../../../config/Colors'
import font from '../../../config/font'

export default function SelectiveButton({option,selected,onSelect}) {
     
    const hundlePress=()=>{
       onSelect(option)
    }
    return (
        <TouchableHighlight 
        underlayColor={Colors.primary}
        style={[styles.container,{borderBottomLeftRadius:selected ?0:20,
                                  backgroundColor :selected?Colors.primary:Colors.white,                                      }]} 
        onPress={hundlePress} >
            <AppText  style={{
        paddingHorizontal:11, 
        paddingVertical:7,
        fontFamily:font.PublicSans_700Bold,
        color:selected?Colors.white:Colors.fontColor,
        fontSize:15,
        fontWeight:'bold',
            }} >
               {option.label}
            </AppText>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container :{
        height:"auto",
        borderColor:Colors.borders,
        borderStyle:'solid',
        borderWidth:1,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:20,  
        marginRight:10, 
        marginBottom:8,
    },
})
