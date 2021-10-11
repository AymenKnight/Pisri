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


export const StepContext = React.createContext();
export const AnimationContext = React.createContext();

export default function Delevery() {
  const [step, setstep] = useState(1);
  const fadeInRight = "fadeInRight";
  const fadeInLeft = "fadeInLeft";
  const [animation, setanimation] = useState(fadeInRight);

  const goBack = () => {
    if (step > 1) {
      setanimation(fadeInLeft);
      setstep(step - 1);
    }
  };
  return (
    <ScrollView style={styles.screen}>
      <TopNavigation backButton={true} hundleLeftBtn={goBack} />
      <DotedScroll fill={step} />
      <View style={styles.step}>
        {step == 1 && (
          <Animatable.View
            animation={animation}
            duration={400}
            easing="ease-out"
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
            easing="ease-out"
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
            easing="ease-out"
            useNativeDriver={true}
          >
            <Step03
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
