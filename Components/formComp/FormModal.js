import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Colors from "../config/Colors";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default function FormModal({ visible, children, onClosed, }) {
  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <Modal
      isVisible={visible}
      style={styles.newModel}
      hasBackdrop={true}
      backdropColor="white"
      backdropOpacity={0}
      onBackdropPress={onClosed}
      onBackButtonPress={onClosed}
      animationIn="slideInUp"
      animationInTiming={0}
      animationOutTiming={1000}
      backdropTransitionOutTiming={2000}
      onSwipeComplete={onClosed}
      swipeDirection="down"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.ScrollView}
        contentContainerStyle={[styles.contentContainerStyle]}
      >
        {children}
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  newModel: {
    width: "100%",
    margin: 0,
   
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: "100%",
    borderColor: Colors.light,
    borderWidth: 2.5,
    borderStyle: "solid",
    flexShrink: 1,
  },
  contentContainerStyle: {
    width: "100%",
  },
  ScrollView: {
    width: "100%",
    position:"absolute",
    bottom:0,
  },
});
