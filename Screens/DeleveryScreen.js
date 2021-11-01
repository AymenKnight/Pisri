import React, { useState, useContext, useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";

import PrimaryButton from "../Components/Basic/PrimaryButton";
import DotedScroll from "../Components/DeleveryComp/DotedScroll";
import Step01 from "../Components/DeleveryComp/steps/Step01";
import Step02 from "../Components/DeleveryComp/steps/Step02";
import Step03 from "../Components/DeleveryComp/steps/Step03";
import TopNavigation from "../Components/navigation/topNavigation/TopNavigation";
import { useFocusEffect } from "@react-navigation/core";



 export const StepContext = React.createContext();
export const AnimationContext = React.createContext();



export default function Delevery({navigation}) {

  
  const [step, setstep] = useState(1);
  const fadeInRight = "fadeInRight";
  const fadeInLeft = "fadeInLeft";
  const [animation, setanimation] = useState(fadeInRight);
  


   const goBack =()=>{
    if(step>1) {
      setanimation(fadeInLeft)
      setstep(step-1)}
      else {
          navigation.goBack();
      }
   }
  return (
    <View style={styles.screen}>
      <TopNavigation backButton={true} hundleLeftBtn={goBack}   />
      <DotedScroll fill={step} />
      <View style={styles.step}>
        {step == 1 && (
          <Animatable.View
            animation={animation}
            duration={400}
       
            useNativeDriver={true}
          >
            <Step01
              stepOption={{ step: step, setstep: setstep }}
              animationOption={{
                animation: animation,
                setanimation: setanimation,
              }}
            />
          </Animatable.View>
        )}
        {step == 2 && (
          <Animatable.View
            animation={animation}
            duration={400}
           
            useNativeDriver={true}
          >
            <Step02
              stepOption={{ step: step, setstep: setstep }}
              animationOption={{
                animation: animation,
                setanimation: setanimation,
              }}
            />
          </Animatable.View>
        )}
        {step == 3 && (
          <Animatable.View
            animation={animation}
            duration={400}
          
            useNativeDriver={true}
          >
            <Step03
             navigation={navigation}
              stepOption={{ step: step, setstep: setstep }}
              animationOption={{
                animation: animation,
                setanimation: setanimation,
              }}
            />
          </Animatable.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  step: {
    width: "100%",
    
  },
});
