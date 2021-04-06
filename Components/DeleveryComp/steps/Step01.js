import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PrimaryButton from "../../Basic/PrimaryButton";
import DeleveryOption from "../DeleveryOption";
import OptionsContainer from "../OptionsContainer";
import AppText from "../../Basic/AppText";
import font from "../../config/font";
import Colors from "../../config/Colors";
import TimerSnipper from "../../Basic/Snippers/TimerSnipper";
import PriceSnipper from "../../Basic/Snippers/PriceSnipper";
import DistanceSnipper from "../../Basic/Snippers/DistanceSnipper";

const initialSetting = {
  offreAlive: {
    hour: 0,
    min: 15,
  },
  deleveryTime: {
    hour: 0,
    min: 15,
  },
  pay: {
    currency: "dzd",
    price: 200,
  },
  distance: {
    unite: "M",
    distance: 200,
  },
};

export default function Step01({
  stepOption = { step, setstep },
  animationOption = { animation, setanimation },
}) {
  const [offreAlive, setoffreAlive] = useState(initialSetting.offreAlive);
  const [deleveryTime, setdeleveryTime] = useState(initialSetting.deleveryTime);
  const [pay, setpay] = useState(initialSetting.pay);
  const [distance, setdistance] = useState(initialSetting.distance);
  const { step, setstep } = stepOption;
  const { animation, setanimation } = animationOption;
  const fadeInRight = "fadeInRight";
  return (
    <View style={styles.container}>
      <AppText style={styles.stepTitle}>Step 1: delevery options</AppText>
      <OptionsContainer>
        <DeleveryOption
          title="offer stay alive for :"
          subtitle=" how long your offer stay on waiting list"
        />
        <TimerSnipper time={offreAlive} onChangeTime={setoffreAlive} />

        <DeleveryOption
          title="delevery time :"
          subtitle="maximum time to deliver the product"
        />
        <TimerSnipper time={deleveryTime} onChangeTime={setdeleveryTime} />
        <DeleveryOption
          title="Tip"
          subtitle="you have to pay the delivery right?"
        />
        <PriceSnipper priceOption={pay} onChangePrice={setpay} />
        <DeleveryOption
          title="distance"
          subtitle="how far your order can be annonced"
        />
        <DistanceSnipper
          distanceOption={distance}
          onChangeDistance={setdistance}
        />
      </OptionsContainer>
      <PrimaryButton
        title="Next"
        IconComp={MaterialIcons}
        icon="location-on"
        width="71%"
        onPress={() => {
          if (step < 3) {
            setstep(step + 1);
            setanimation(fadeInRight);
          }
        }}
      />
      <AppText style={styles.please}>
        Please enable Gps and press on verify
      </AppText>
      <AppText style={styles.notice}>
        Notice: we need your location to in order to deliver our services
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  stepTitle: {
    width: "86%",
    marginBottom: 20,
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 20,
    textAlign: "left",
  },
  please: {
    color: "black",
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
    marginBottom: 8,
  },
  notice: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_500Medium,
    fontSize: 13,
    textAlign: "center",
    width: "71%",
    lineHeight: 15.5,
    padding:5,
    marginBottom:25,
  },
});
