import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OffreItem from "./OffreItem";
const finishedArray = [
  {
    type: "finished",
    reciept_ID: 123456789,
    num_request: 1,
    price: 900,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234567,
    num_request: 1,
    price: 1000,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234,
    num_request: 1,
    price: 500,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234567844,
    num_request: 1,
    price: 400,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
];
export default function FinishedTab({ route, navigation }) {
  return (
    <FlatList
      data={finishedArray}
      keyExtractor={(item) => item.reciept_ID.toString()}
      style={styles.FlatList}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <OffreItem
          type={item.type}
          key={item.reciept_ID}
          reciept_ID={item.reciept_ID}
          price={item.price}
          currency={item.currency}
          num_request={item.num_request}
          reminingTime={item.reminingTime}
          here={item.here}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
  },
  FlatList: {
    width: "100%",
    maxHeight: "77%",
    flexGrow: 0,
    alignSelf: "center",
  },
});