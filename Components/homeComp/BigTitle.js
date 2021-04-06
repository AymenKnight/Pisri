import React from 'react'
import { StyleSheet, } from 'react-native'

import AppText from '../Basic/AppText'
import Colors from '../config/Colors';
import font from '../config/font';

export default function BigTitle({title}) {

    return (
      <AppText  style={styles.Text} >
            {title}
      </AppText>
    )
    
}

const styles = StyleSheet.create({
    Text :{
        fontFamily:font.PublicSans_800ExtraBold,
        color:Colors.fontColor,
        fontSize:40,
        marginHorizontal:18,
        marginVertical:5,
    }
})
