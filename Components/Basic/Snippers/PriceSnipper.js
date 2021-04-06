import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import AppText from "../AppText";
import Colors from "../../config/Colors";
import font from "../../config/font";
import { TouchableOpacity } from "react-native";

export default function PriceSnipper({
  priceOption = { price: 0, currency: dzd },
  onChangePrice,
}) {
  const { price, currency } = priceOption;

  const hundleless = () => {
    if (price > 0) {
      onChangePrice((prev) => ({ ...prev, price: prev.price - 1 }));
    }
  };

  const hundlePlus = () => {
    onChangePrice((prev) => ({ ...prev, price: prev.price + 1 }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hundleless} style={styles.minusContainer}>
        <AntDesign name="minus" size={18} color="white" />
      </TouchableOpacity>
      <View style={styles.textContianer}>
        <View style={styles.distance}>
          <AppText style={[styles.cpt, styles.distanceValue]}>{price}</AppText>
          <AppText style={styles.tag}>{currency}</AppText>
        </View>
      </View>
      <TouchableOpacity
        onPress={hundlePlus}
        style={[styles.minusContainer, styles.plusContainer]}
      >
        <Entypo name="plus" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    flexDirection: "row",
    alignSelf: "center",
  },
  minusContainer: {
    backgroundColor: Colors.borders,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  plusContainer: {
    backgroundColor: Colors.primary,
  },
  textContianer: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.borders,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 0,
  },
  cpt: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  distance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  distanceValue: {},
  tag: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.primary,
    fontSize: 13,
    alignSelf: "flex-end",
    marginLeft: 2,
  },
});
