import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../AppText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText>{item.label} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
