import React from 'react'
import { useState } from 'react';
import { StyleSheet, Modal, View ,Image, ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import {  Provider } from "react-native-paper";

import AppButton from '../Basic/AppButton';
import Colors from '../config/Colors';
import SignInForm from '../forms/SignInForm';
import SignUpForm from '../forms/SignUpForm';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function WelcomeScreen({navigation,route}) {
  const [SignInVisible, setSignInVisible] = useState(false);
  const [SignUpVisible, setSignUpVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen }); 

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

        <SignInForm
          visible={SignInVisible}
          setVisible={() => setSignInVisible(false)}
        />
        <SignUpForm
          visible={SignUpVisible}
          setVisible={() => setSignUpVisible(false)}
        />
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

