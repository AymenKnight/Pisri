import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../Basic/PrimaryButton";
import DotedScroll from "../DeleveryComp/DotedScroll";
import Step01 from "../DeleveryComp/steps/Step01";
import Step02 from "../DeleveryComp/steps/Step02";
import Step03 from "../DeleveryComp/steps/Step03";
import TopNavigation from "../topNavigation/TopNavigation";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";


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
    <ScrollView style={styles.screen}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  step: {
    width: "100%",
  },
});
