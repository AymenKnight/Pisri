import React from 'react'
import { useState } from 'react';
import { StyleSheet, View ,Image, ImageBackground} from 'react-native';
import {  Provider } from "react-native-paper";

import AppButton from '../Basic/AppButton';
import Colors from '../config/Colors';
import { SignVisibleContext } from '../context/SignVisibleContext';
import SignInForm from '../forms/SignInForm';
import SignUpForm from '../forms/SignUpForm';


export default function WelcomeScreen({navigation,route}) {
  const [SignInVisible, setSignInVisible] = useState(false);
  const [SignUpVisible, setSignUpVisible] = useState(false);


  return (
    <>
      <Provider>
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/signBackground.png")}
            style={styles.ImageBackground}
          >
            <View style={styles.ButtonsContainer}>
              <AppButton
                title="Sign Up "
                backgroundcolor={Colors.primary}
                textColor="white"
                width={65}
                fontSize={18}
                onPress={() => setSignUpVisible(true)}
              />
              <AppButton
                title="Sign In "
                backgroundcolor={Colors.seconadry}
                textColor="white"
                width={65}
                fontSize={18}
                onPress={() => setSignInVisible(true)}
              />
            </View>
            <Image
              source={require("../assets/welcomeLogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>
        <SignVisibleContext.Provider  value={
          {
            SignInVisible:SignInVisible,setSignInVisible:setSignInVisible,
            SignUpVisible:SignUpVisible,setSignUpVisible:setSignUpVisible
        }} >
          <SignInForm
            visible={SignInVisible}
            setVisible={() => setSignInVisible(false)}
          />
          <SignUpForm
            visible={SignUpVisible}
            setVisible={() => setSignUpVisible(false)}
          />
        </SignVisibleContext.Provider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground :{
     flex :1 ,
     justifyContent:"flex-end",
     alignItems:"center",
  },
  ButtonsContainer :{
     width:"100%",
     alignItems:"center",
     bottom:"25%",
  },
   
  logo :{
    position: "absolute",
    top: "5%",
    width:"55%",
    height:150,
  },


});

