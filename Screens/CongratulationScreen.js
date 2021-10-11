import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from "react-native-animatable";
import { SimpleLineIcons } from "@expo/vector-icons"; 

import OptionsContainer from '../Components/DeleveryComp/OptionsContainer';
import TopNavigation from "../Components/navigation/topNavigation/TopNavigation";
import Colors from '../Components/config/Colors';
import font from '../Components/config/font';
import AppText from '../Components/Basic/AppText';
import PrimaryButton from '../Components/Basic/PrimaryButton';

export default function CongratulationScreen() {
    return (
        <View style={styles.Container}  >
            <TopNavigation   />  
            <OptionsContainer  style={styles.box} >
                <Animatable.View animation="bounceIn" duration={3000}>
            <SimpleLineIcons
              name="check"
              size={90}
              color={Colors.lime}
              style={styles.logo}
            />
          </Animatable.View>
           <AppText style={styles.CongratulationText}> Congrate! </AppText>
           <View style={styles.infoContainer} >
             <View style={styles.line1} >
                 <AppText style={styles.cost} >Cost : 900 </AppText>
                 <AppText style={styles.currency} >Dzd</AppText>
             </View>
             <AppText style={styles.line2} >Delevered By :  John Doe</AppText>
           </View>
            </OptionsContainer>
              <PrimaryButton title="Go home" width="80%"  />
        </View>
    )
}

const styles = StyleSheet.create({
    Container :{
        alignItems:'center',
        padding:5,
    },
    box :{
    justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom:150,
    },
      logo: {
      marginBottom: 13,
      marginTop: 5,
    },
    CongratulationText :{
        color: Colors.fontColor,
      fontFamily: font.PublicSans_800ExtraBold,
      fontSize: 28,
      textAlign: "center",
      marginBottom: 6,
     
    },
    infoContainer :{
        padding:10,
    width:"100%",
    },
    line1 :{
        flexDirection:'row',
        width:"100%",
       alignItems:'flex-start',
    },
    cost :{
           color: Colors.lime,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
    },
    currency :{
     color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
    },
    line2 :{
        width:"100%",
          color: Colors.fontColor,
      fontFamily: font.PublicSans_700Bold,
      fontSize: 18,
    },
})
