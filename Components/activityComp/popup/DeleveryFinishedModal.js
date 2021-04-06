import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppText from "../../Basic/AppText";
import CloseButton from "../../Basic/CloseButton";
import Colors from "../../config/Colors";
import font from "../../config/font";
import FormModal from "../../formComp/FormModal";

export default function DeleveryFinishedModal({ visible, setVisible, reciept_ID ,code}) {
  return (
    <FormModal
      visible={visible}
      onClosed={() => setVisible(false)}
      height="60%"
    >
      <View style={styles.content}>
        <CloseButton onPress={() => setVisible(false)} />
        <AppText style={styles.mainTitle}>Delevery requests</AppText>
        <AppText style={styles.reciept_ID}>Reciept #{reciept_ID} </AppText>
        <View style={styles.options}>
          <Text style={[styles.reciept_ID,{width:"80%",lineHeight:22,textAlign:"center",marginBottom:20,marginTop:5,}]}>
            Please provide your delevery guy with the code bellow :
          </Text>
          <View style={styles.codeContainer} >
              <AppText style={styles.codeText} >{code}</AppText>
          </View>
        </View>
      </View>
    </FormModal>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 19,
    marginBottom: 10,
  },
  reciept_ID: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 15,
    marginBottom: 20,
    padding: 5,
  },
  codeText: {
    color: Colors.primary,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 21,
    textAlign:"center",
    paddingVertical:10,
  },
  options: {
    alignSelf: "center",
    width: "88%",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
    padding: 10,
  },
  codeContainer: {
    width: "88%",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
    padding: 10,
  },
});
