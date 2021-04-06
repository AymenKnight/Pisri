import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useResponsiveScreenWidth } from "react-native-responsive-dimensions";
import AppText from "../../Basic/AppText";
import PrimaryButton from "../../Basic/PrimaryButton";
import Colors from "../../config/Colors";
import font from "../../config/font";
import OptionsContainer from "../OptionsContainer";
import PaymentOption from "../PaymentOption";

export default function Step02({
  stepOption = { step, setstep },
  animationOption = { animation, setanimation },
}) {
  const { step, setstep } = stepOption;
  const { animation, setanimation } = animationOption;
  const fadeInRight = "fadeInRight";
  return (
    <View style={styles.container}>
      <AppText style={styles.stepTitle}>Step 2: Payment Method</AppText>
      <OptionsContainer>
        <AppText style={styles.please}>
          Please select on of the payment methods
        </AppText>

        <PaymentOption centerTitle="PayPal/CreditCard" />
        <PaymentOption centerTitle="Mobile Pay" />
        <PaymentOption
          centerTitle="PayPal/CreditCard"
          subtitle="this may affect the chance to get a delevry guy"
        />
      </OptionsContainer>
      <View style={{ marginTop: 35 }}>
        <PrimaryButton
          title="Next"
          width={useResponsiveScreenWidth(35)}
          onPress={() => {
            if (step < 3) {
              setstep(step + 1);
              setanimation(fadeInRight);
            }
          }}
        />
      </View>
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
    fontSize: 19,
    textAlign: "left",
  },
  please: {
    color: "black",
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
});
