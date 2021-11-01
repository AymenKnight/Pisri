import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OffreItem from "./OffreItem";

export default function FinishedTab({ route, navigation, finishedArray }) {
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
    paddingBottom:100,   
  },
  FlatList: {
    width: "100%",
    flexGrow: 0,
    alignSelf: "center",
  },
});