import React from 'react'
import { StyleSheet } from 'react-native'
import AppButton from '../Basic/AppButton'
import Colors from '../config/Colors'

export default function Help_Button({onPress,title}) {
    return (
       <AppButton 
       onPress={onPress} 
       title={title} 
       fontSize={15}  
       height={10}
       width={17}
       textColor={Colors.primary}

         />
    )
}

const styles = StyleSheet.create({})
