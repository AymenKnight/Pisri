import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../Basic/AppText'

export default function ErrorMessage({vaisble,error}) {
    if(!error || !vaisble){return null}
    return (
      <AppText style={styles.red_error}  > 
        {error}
      </AppText> 
    )
}

const styles = StyleSheet.create({
    red_error :{
        color:"red"
    }
})
