import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {TouchableWithoutFeedback,} from "react-native-gesture-handler";

const TrashSwipe = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={42}
        color="red"
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    borderRadius: 20,
    width:80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight:10,
    marginLeft:5,
    padding:10,
  },
});

export default TrashSwipe;
