import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import AppText from "../AppText";
import Colors from "../../config/Colors";
import font from "../../config/font";
import { TouchableOpacity } from "react-native";


export default function TimerSnipper({ time ={hour:0,min:15},onChangeTime}) {


  const hundleless = () => {
        if (time.min - 15 < 0) {
          if (time.hour != 0) {
            onChangeTime((prev) => ({
              hour: prev.hour - 1,
              min: 45,
            }));
          }
        } else {
          onChangeTime((prev) => ({ ...prev, min: prev.min - 15 }));
        }
      }

      
    
  
  const hundlePlus = () => {

        if (time.min + 15 == 60) {
          onChangeTime((prev) => ({ hour: prev.hour + 1, min: 0 }));
        } else {
          onChangeTime((prev) => ({ ...prev, min: prev.min + 15 }));
        }
      }
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hundleless} style={styles.minusContainer}>
        <AntDesign name="minus" size={18} color="white" />
      </TouchableOpacity>
      <View style={styles.textContianer}>
          <AppText style={styles.cpt}>
            {time.hour < 10 ? "0" + time.hour : time.hour}:
            {time.min == 0 ? "0" + time.min : time.min}
          </AppText>
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
