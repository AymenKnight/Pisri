import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"; 
import ProfileButton from './ProfileButton';
import { TouchableOpacity } from 'react-native';
import BackButton from './BackButton';

export default function TopNavigation({hundleLeftBtn,hundleProfilePress ,backButton=false}) {
    return (
      <View style={styles.container}>
        {!backButton && (
          <TouchableOpacity onPress={hundleLeftBtn} style={styles.menu}>
            <Entypo name="menu" size={40} color="black" />
          </TouchableOpacity>
        )}
        {backButton && <BackButton onPress={hundleLeftBtn} />}
        <Image
          source={require("../assets/welcomeLogo.png")}
          style={styles.logo}
        />
        <ProfileButton style={styles.profile} onPress={hundleProfilePress} />
      </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        width:"100%",
        padding:20,
        marginTop:20,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
    },
    menu :{
      position:'absolute',
      left :"3%", 
    },
    logo :{
        width :100,
        height :58,
    },
    profile :{
      position:'absolute',
      right :15,
    }
})
