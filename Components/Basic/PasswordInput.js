import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../config/Colors"
import defaultStyle from "../config/styles"
import { Dimensions } from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
 import { MediaQuery } from "react-native-responsive";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function PasswordInput({width,inputStyle,...otherProps}) {
    const [dimensions, setDimensions] = useState({ window, screen }); 
    const [focused, setfocused] = useState(false)
    const [passwordVaisible, setpasswordVaisible] = useState(false)
    const [secure, setsecure] = useState(true)

    const showPassword=()=>{
        setpasswordVaisible(!passwordVaisible)
        setsecure(!secure)
    }
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
            <TextInput
              secureTextEntry={secure}
              placeholderTextColor={Colors.medium}
              onFocus={() => setfocused(true)}
              onEndEditing={() => setfocused(false)}
              style={[defaultStyle.text, styles.TextInput, inputStyle]}
              {...otherProps}
            />
            <MaterialCommunityIcons
              style={styles.eye_icon}
              onPress={showPassword}
              name={passwordVaisible ? "eye-off" : "eye"}
              size={21}
              color={focused ? Colors.primary : Colors.gray}
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
            <TextInput
              secureTextEntry={secure}
              placeholderTextColor={Colors.medium}
              onFocus={() => setfocused(true)}
              onEndEditing={() => setfocused(false)}
              style={[defaultStyle.text, styles.TextInput, inputStyle]}
              {...otherProps}
            />
            <MaterialCommunityIcons
              style={styles.eye_icon}
              onPress={showPassword}
              name={passwordVaisible ? "eye-off" : "eye"}
              size={25}
              color={focused ? Colors.primary : Colors.gray}
            />
          </View>
        </MediaQuery>
      </>
    );
}
const styles = StyleSheet.create({
    container :{
      flex:10,
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        borderRadius:15,
        marginVertical: 10,
         borderWidth:1,
    },
    eye_icon :{
      flex:1,
        marginLeft:10,
    },
 
    TextInput :{
      flex:9,
        marginRight:12,
       
    }
})
