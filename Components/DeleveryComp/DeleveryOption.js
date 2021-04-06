import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../Basic/AppText'
import Colors from '../config/Colors'
import font from '../config/font'

export default function DeleveryOption({title,subtitle}) {
    return (
      <View style={styles.container}>
        <AppText style={styles.title}> {title} </AppText>
        <View style={styles.bottomContainer}>
          <AppText style={styles.subtitle}> {subtitle} </AppText>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: 5,
    marginBottom: 2,
    
  },
  title: {
    fontFamily: font.PublicSans_700Bold,
    fontSize: 15,
    lineHeight: 17,
    color: Colors.fontColor,
    padding: 5,
  },
  subtitle: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 13,
    lineHeight: 15.5,
    color: Colors.stroke,
    textAlign: "center",
    padding: 2,
    marginBottom:6,
  },
  bottomContainer :{
    justifyContent:'center',
    alignItems:'center',
  }
});
