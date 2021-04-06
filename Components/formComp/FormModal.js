import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from 'react-native-modalbox';
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Colors from "../config/Colors";
import { responsiveHeight, responsiveScreenHeight } from "react-native-responsive-dimensions";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default function FormModal({ visible, children, top, onClosed,height="75%"  }) {
  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <Modal
      style={[styles.modal, { top: top, height: height }]}
      isOpen={visible}
      backdropPressToClose={true}
      swipeToClose={true}
      position="bottom"
      entry="bottom"
      backButtonClose={true}
      useNativeDriver={true}
      onClosed={onClosed}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollView}
        contentContainerStyle={[styles.contentContainerStyle]}
      >
        {children}
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  },
});
