import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../Basic/AppText';
import Colors from '../config/Colors';
import font from '../config/font';

export default function TotalBox({num_items,total,tag}) {
    return (
      <View style={styles.container}>
        <AppText style={styles.num_items}> {num_items} items </AppText>
        <View style={styles.priceContainer}>
          <AppText style={styles.total}> {total} </AppText>
          <AppText style={styles.tag}> {tag} </AppText>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth:1,
    borderColor:Colors.borders,
    borderStyle:'solid',
    alignSelf:'center',
    borderRadius:20,
    padding:10,
    marginBottom:10,
  },
  num_items: {
    color: Colors.borders,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 4,
    textAlign:'center',
  },
  total: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
  },
  tag: {
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 13,
    alignSelf: "flex-end",
  },
});
