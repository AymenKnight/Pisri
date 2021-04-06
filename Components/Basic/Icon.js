import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"


function Icon({name,Size=40,BackgroundColor="black",IconColor="white",style}) {

    return (
       <View style={[{

        justifyContent:"center",
        alignItems:"center",
        width:Size,
        height:Size,
        borderRadius:Size/2,
        backgroundColor:BackgroundColor,
        
       },style]} >
             <MaterialCommunityIcons name={name} size={Size/2} color={IconColor} />
       </View>
    );
}


export default Icon;