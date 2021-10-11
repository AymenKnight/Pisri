import React from "react";
import { View  ,StyleSheet } from "react-native";
import {Feather } from "@expo/vector-icons";
import { MediaQueryStyleSheet } from "react-native-responsive";
import * as Animatable from 'react-native-animatable';
import { PublicSans_600SemiBold , useFonts } from "@expo-google-fonts/public-sans";
import AppLoading from "expo-app-loading";

import OptionsContainer from "../Components/DeleveryComp/OptionsContainer";
import TopNavigation from "../Components/navigation/topNavigation/TopNavigation";
import Colors from "../Components/config/Colors";
import AppText from "../Components/Basic/AppText";
import font from "../Components/config/font";
import PrimaryButton from "../Components/Basic/PrimaryButton";


export default function OnTheWayScreen({navigation}) {
    
     let [fontsLoaded] = useFonts({  PublicSans_600SemiBold, });
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
  return (
    <View style={styles.container}>
      <TopNavigation backButton={true} />
      <OptionsContainer style={styles.requestFinished}>
        <Animatable.View animation="bounceIn" duration={3000}  style={styles.truckContainer} >
          <Feather name="truck" size={45} color={Colors.lime} style={styles.logo} />
        </Animatable.View>

        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          duration={1800}
          easing="ease-out-cubic"
          useNativeDriver={true}
          style={styles.requestText}
        >
          Your order is on the way!
        </Animatable.Text>
      </OptionsContainer>
      <View style={styles.textsContainer}>
        <AppText style={styles.orangeText}> to lets you know: </AppText>
        <AppText style={styles.blueText}>
          {" "}
          1.we will notify you when a delevery guy accept your request.
        </AppText>
        <AppText style={styles.blueText}>
          {" "}
          2.please stay tune so you will not lose your guy gay.
        </AppText>
        <AppText style={styles.blueText}>
          3.we will refund you if the delevery fail{" "}
        </AppText>
      </View>
      <PrimaryButton title="Continue" width="75%"  onPress={()=>{navigation.goBack()}} />
    </View>
  );
}}

const styles = MediaQueryStyleSheet.create(
  {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    truckContainer: {
      width: 85,
      height: 85,
      borderRadius: 42.5,
      borderWidth: 5,
      borderColor: Colors.lime,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:20,
      marginTop:5,
    },
    requestFinished: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    requestText: {
      color: Colors.fontColor,
      fontFamily: font.PublicSans_600SemiBold,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 12,
    },
    logo: {
      marginBottom: 13,
      marginTop: 5,
    },
    textsContainer: {
      width: "85%",
    },
    blueText: {
      color: Colors.fontColor,
      fontFamily: font.PublicSans_600SemiBold,
      fontSize: 19,
      textAlign: "left",
      marginBottom: 5,
      lineHeight: 25,
    },
    orangeText: {
      color: Colors.primary,
      fontFamily: font.PublicSans_700Bold,
      fontSize: 24,
      textAlign: "left",
      marginBottom: 10,
    },
  },
  {
    "@media (max-device-height: 720)": {
      requestFinished: {
        marginBottom: 20,
      },
      textsContainer: {
        marginBottom: 20,
      },
    },
    "@media (min-device-height: 721)": {
      requestFinished: {
        marginBottom: 60,
      },
      textsContainer: {
        marginBottom: 45,
      },
    },
  }
);
