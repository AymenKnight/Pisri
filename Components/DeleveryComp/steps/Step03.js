import React from "react";
import { StyleSheet, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";

import AppText from "../../Basic/AppText";
import InfoLabel from "../../Basic/InfoLabel";
import Colors from "../../config/Colors";
import font from "../../config/font";
import OptionsContainer from "../OptionsContainer";
import { TouchableOpacity } from "react-native";
import AppButton from "../../Basic/AppButton";
import PrimaryButton from "../../Basic/PrimaryButton";
import routes from "../../navigation/routes";

export default function Step03({
  navigation,
  stepOption = { step, setstep },
  animationOption = { animation, setanimation },
}) {
  const { step, setstep } = stepOption;
  const { animation, setanimation } = animationOption;
  return (
    <View style={styles.container}>
      <AppText style={styles.stepTitle}>Step 3: Confirm and publish! </AppText>
      <OptionsContainer style={styles.OptionsContainer}>
        <View style={styles.textsContainer}>
          <AppText style={styles.bellowText}> you are going to pay </AppText>
          <View style={styles.priceContainer}>
            <AppText style={styles.price}> 900 </AppText>
            <AppText style={styles.currency}> Dzd </AppText>
          </View>
          <AppText style={styles.bellowText}>
            {" "}
            using the option bellow:{" "}
          </AppText>
        </View>
        <InfoLabel title="Pay on arrive" />
      </OptionsContainer>
      <View style={styles.addNoteContainer}>
        <AppText style={[styles.bellowText, styles.addNote]}>
          add a note for delevery guy:
        </AppText>
        <TouchableOpacity>
          <FontAwesome
            name="pencil-square-o"
            size={29}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <PrimaryButton
        backgroundcolor={Colors.lime}
        title="Confirm"
        width="80%"
        onPress={() => {
          navigation.navigate(routes.DELEVERY_FINISHED);
        }}
      />
      <PrimaryButton
        backgroundcolor={Colors.eliminatedRed}
        title="Cancel"
        width="80%"
        onPress={() => {
          navigation.goBack()
        }}
      />
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
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
  },
  OptionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(22),
  },
  textsContainer: {
    width: "78%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 18,
    alignSelf: "center",
    justifyContent: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bellowText: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 17,
    lineHeight: 22,
  },
  price: {
    color: Colors.lime,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    lineHeight: 22,
  },
  currency: {
    color: Colors.primary,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    lineHeight: 22,
  },
  addNote: {
    marginRight: 10,
  },
  addNoteContainer: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
