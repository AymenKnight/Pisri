import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons"; 
 import { MediaQueryStyleSheet } from "react-native-responsive";
import * as Animatable from "react-native-animatable";

import OptionsContainer from '../DeleveryComp/OptionsContainer'
import TopNavigation from "../navigation/topNavigation/TopNavigation";
import Colors from '../config/Colors';
import AppText from '../Basic/AppText';
import font from '../config/font';
import PrimaryButton from '../Basic/PrimaryButton';
import routes from '../navigation/routes';

export default function DeleveryFinished({navigation}) {
    return (
      <View style={styles.container}>
        <TopNavigation backButton={true} />
        <OptionsContainer style={styles.requestFinished}>
          <Animatable.View animation="bounceIn" duration={3000}>
            <SimpleLineIcons
              name="check"
              size={90}
              color={Colors.lime}
              style={styles.logo}
            />
          </Animatable.View>
          <AppText style={styles.requestText}>
            Your request has been published succefully
          </AppText>
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
        <PrimaryButton title="Continue" width="75%" onPress={()=>{navigation.navigate(routes.ACTIVITY)}} />
      </View>
    );
}

const styles = MediaQueryStyleSheet.create(
  {
    container: {
      justifyContent: "center",
      alignItems: "center",
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
