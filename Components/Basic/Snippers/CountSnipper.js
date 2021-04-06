import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import AppText from "../AppText";
import Colors from "../../config/Colors";
import font from "../../config/font";
import { TouchableOpacity } from "react-native";

export default function CountSnipper({
  count = 0,
  onChangeCount,
}) {


  const hundleless = () => {
    if(count>0)
 onChangeCount(count -1);
  };

  const hundlePlus = () => {
   onChangeCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hundleless} style={styles.minusContainer}>
        <AntDesign name="minus" size={18} color="white" />
      </TouchableOpacity>
      <View style={styles.textContianer}>
        <AppText style={styles.cpt}>{"x" + count}</AppText>
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


});
