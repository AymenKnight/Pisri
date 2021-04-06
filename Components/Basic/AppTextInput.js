import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {useFonts, PublicSans_500Medium, } from '@expo-google-fonts/public-sans';
import AppLoading from "expo-app-loading";
import Colors from "../config/Colors";
import defaultStyle from "../config/styles";
import { Dimensions } from "react-native";
import { responsiveFontSize } from 'react-native-responsive-dimensions';
 import { MediaQuery } from "react-native-responsive";



 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");

export default function AppTextInput({icon,width,inputStyle,...otherProps}) {
       const [dimensions, setDimensions] = useState({ window, screen }); 
    const [focused, setfocused] = useState(false)
         let [fontsLoaded] = useFonts({PublicSans_500Medium});
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
    return (
      <>
        <MediaQuery maxDeviceHeight={720}>
          <View
            style={[
              styles.container,
              {
                width: width,
                borderColor: focused ? Colors.primary : Colors.gray,
                padding: 5,
              },
            ]}
          >
            {icon && (
              <MaterialIcons
                style={[styles.icon, { marginLeft: 5 }]}
                name={icon}
                size={18}
                color={focused ? Colors.primary : Colors.gray}
              />
            )}
            <TextInput
              placeholderTextColor={Colors.medium}
              onFocus={() => setfocused(true)}
              onEndEditing={() => setfocused(false)}
              style={[defaultStyle.text, styles.TextInput, inputStyle]}
              {...otherProps}
            />
          </View>
        </MediaQuery>
        <MediaQuery minDeviceHeight={721}>
          <View
            style={[
              styles.container,
              {
                width: width,
                borderColor: focused ? Colors.primary : Colors.gray,
                padding: 12,
              },
            ]}
          >
            {icon && (
              <MaterialIcons
                style={[styles.icon, { marginLeft: 5 }]}
                name={icon}
                size={20}
                color={focused ? Colors.primary : Colors.gray}
              />
            )}
            <TextInput
              placeholderTextColor={Colors.medium}
              onFocus={() => setfocused(true)}
              onEndEditing={() => setfocused(false)}
              style={[defaultStyle.text, styles.TextInput, inputStyle]}
              {...otherProps}
            />
          </View>
        </MediaQuery>
      </>
    );
    }
}

const styles = StyleSheet.create({
    container :{
       
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        borderRadius:15,
        marginVertical: 10,
         borderWidth:1,
        
    },
    icon :{
        flex:1,
        marginRight:10,

    },
    TextInput :{
        flex:9,
        marginRight:20,
        height:"100%",
      
    }
})
