import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import {useFonts,PublicSans_600SemiBold} from '@expo-google-fonts/public-sans';

import Colors from "../config/Colors"
import font from '../config/font';
import { TouchableHighlight } from 'react-native';
import AppLoading from "expo-app-loading";



export default function SearchFeild({onSearch,width,placeholder="Search for Product",...otherProps}) {
    const [focused, setfocused] = useState(false)
  
    let [fontsLoaded] = useFonts({
    PublicSans_600SemiBold,
  });
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
    return (
      <View
        style={[
          styles.container,
          { width: width, borderColor: focused ? Colors.primary : Colors.gray },
        ]}
      >
        <TextInput
          placeholderTextColor={Colors.gray}
          onFocus={() => setfocused(true)}
          onEndEditing={() => setfocused(false)}
          style={[styles.TextInput]}
          placeholder={placeholder}
          {...otherProps}
        />
        <TouchableHighlight onPress={onSearch} style={styles.circle}>
          <FontAwesome
            name="search"
            style={styles.icon}
            size={18}
            color={Colors.white}
          />
        </TouchableHighlight>
      </View>
    );
    }
}

const styles = StyleSheet.create({
    container :{
        flexDirection:"row",
        alignItems:"center",
        padding:12,
        width:"100%",
        borderRadius:18,
         borderWidth:1,  
         marginBottom:8,
    },
    circle :{ 
      position:'absolute',
      right:10,
    backgroundColor:Colors.primary,
    alignItems :'center',
    justifyContent:'center',
     width: 38,
     height :38,
     borderRadius :19,
     padding:5,
     marginLeft:5,
    },
    icon :{
      
    },
    TextInput :{
        fontFamily:"PublicSans_600SemiBold",
        fontSize:16,
        height:"100%", 
        width:"86%"
    }
})
