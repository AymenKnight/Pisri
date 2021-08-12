import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../Basic/PrimaryButton";
import DotedScroll from "../DeleveryComp/DotedScroll";
import Step01 from "../DeleveryComp/steps/Step01";
import Step02 from "../DeleveryComp/steps/Step02";
import Step03 from "../DeleveryComp/steps/Step03";
import TopNavigation from "../navigation/topNavigation/TopNavigation";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();


export const StepContext = React.createContext();
export const AnimationContext = React.createContext();

export default function Delevery() {
  const [step, setstep] = useState(1);
  const fadeInRight = "fadeInRight";
  const fadeInLeft = "fadeInLeft";
  const [animation, setanimation] = useState(fadeInRight);
 

  const goBack = () => {
    
    }

  
  return (
    <>
      <View style={styles.screen}>
        <TopNavigation backButton={true} hundleLeftBtn={goBack} />
        <DotedScroll fill={step} />
      </View>
      <Stack.Navigator
        screenOptions={({navigation})=>{
          return(
          {
          headerShown: false,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}}
      >
        <Stack.Screen name="step01" component={Step01}   />
        <Stack.Screen name="step02" component={Step02} />
        <Stack.Screen name="step03" component={Step03} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  step: {
    width: "100%",
  },
});
