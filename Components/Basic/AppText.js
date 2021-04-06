import React from 'react'
import { StyleSheet, Text } from 'react-native'
import defaultStyle from "../config/styles"
import {useFonts,
PublicSans_800ExtraBold,
PublicSans_300Light,
PublicSans_200ExtraLight,
PublicSans_400Regular,
PublicSans_500Medium,
PublicSans_600SemiBold,
PublicSans_700Bold,PublicSans_900Black  } from '@expo-google-fonts/public-sans';
import AppLoading from "expo-app-loading";

export default function AppText({style,children,...other}) {

     let [fontsLoaded] = useFonts({
       PublicSans_800ExtraBold,
       PublicSans_300Light,
       PublicSans_200ExtraLight,
       PublicSans_400Regular,
       PublicSans_500Medium,
       PublicSans_600SemiBold,
       PublicSans_700Bold,
       PublicSans_900Black,
     });
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
    return (   
            <Text {...other} style={[defaultStyle.text,style]} >
                {children}
            </Text>
    )
    }
}

const styles = StyleSheet.create({
})
