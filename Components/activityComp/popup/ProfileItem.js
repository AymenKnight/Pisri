import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {Feather,} from "@expo/vector-icons"; 
import Colors from '../../config/Colors'
import AppText from "../../Basic/AppText";
import font from '../../config/font';

export default function ProfileItem({onPress,image,name,age,rank,time="05:00"}) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={styles.infoContianer}>
          <AppText style={styles.blueText}>{name}</AppText>
          <View style={styles.rankContainer}>
            <Text style={[styles.blueText, { marginRight: 2 }]}>Rank</Text>
            <AppText style={styles.rankText}>{rank}</AppText>
          </View>
          <AppText style={styles.blueText}>Age :{age} </AppText>
        </View>
        <View style={styles.rightContainer}>
          <View style={[styles.iconContainer]}>
            <Feather name="clock" size={25} color="white" />
          </View>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.borders,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 80,
    marginBottom: 15,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
  infoContianer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 150,
  },
  rankContainer: {
    flexDirection: "row",
    marginRight: 15,
  },
  blueText: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 15,
    marginRight: 10,
    marginBottom: 7,
  },
  rankText: {
    color: Colors.primary,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 15,
  },
  iconContainer: {
    backgroundColor: Colors.lime,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    height: "100%",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeText: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 13,
    marginBottom: 7,
  },
});
