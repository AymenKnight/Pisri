import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";

import PrimaryButton from "../Components/Basic/PrimaryButton";
import DotedScroll from "../Components/DeleveryComp/DotedScroll";
import Step01 from "../Components/DeleveryComp/steps/Step01";
import Step02 from "../Components/DeleveryComp/steps/Step02";
import Step03 from "../Components/DeleveryComp/steps/Step03";
import TopNavigation from "../Components/navigation/topNavigation/TopNavigation";

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
