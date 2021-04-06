import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons"; 

import Colors from '../config/Colors'
import AppText from '../Basic/AppText';
import font from '../config/font';
import { TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable";




export default function OffreItem({
  type,
  reciept_ID,
  num_request,
  price,
  currency = "dzd",
  reminingTime,
  here = false,
  showDeleveryReq,
  showFinishedModal,
  hundlePause,
  editReciept,
  deleteReciept,
}) {
  const [showPopMenu, setshowPopMenu] = useState(false);
  const hundleMenuPress = () => {
    setshowPopMenu(true);
  };

  return (
    <View style={styles.container}>
      {type == "delevering" && (
        <View
          style={[
            styles.deleveringIcon,
            {
              backgroundColor: Colors.primary,
              position: "absolute",
              top: -19,
              left: -5,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="progress-clock"
            size={26}
            color="white"
          />
        </View>
      )}
      {type == "requestFound" && (
        <View
          style={[
            styles.deleveringIcon,
            {
              backgroundColor: Colors.lime,
              position: "absolute",
              top: -19,
              left: -5,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="account-group"
            size={21}
            color="white"
          />
        </View>
      )}
      {type == "waitingRequest" && (
        <View
          style={[
            styles.deleveringIcon,
            {
              backgroundColor: Colors.coldBlue,
              position: "absolute",
              top: -19,
              left: -5,
            },
          ]}
        >
          <MaterialCommunityIcons name="walk" size={22} color="white" />
        </View>
      )}
      {type == "finished" && (
        <View
          style={[
            styles.deleveringIcon,
            {
              backgroundColor: Colors.lime,
              position: "absolute",
              top: -19,
              left: -5,
            },
          ]}
        >
          <Feather name="check" size={25} color="white" />
        </View>
      )}
      <AppText style={styles.reciept_ID}> Reciept #{reciept_ID} </AppText>

      {type == "delevering" && (
        <View style={styles.statusContainer}>
          <AppText style={styles.status}>Status :</AppText>
          <AppText style={styles.blueText}>In the way</AppText>
          <Feather
            name="truck"
            size={23}
            color={Colors.primary}
            style={styles.truck}
          />
        </View>
      )}
      {type == "requestFound" && (
        <View style={styles.statusContainer}>
          <AppText style={styles.status}>Status :</AppText>
          <AppText style={styles.blueText}>You have</AppText>
          <AppText style={styles.num_request}> {num_request} </AppText>
          <AppText style={styles.blueText}>delevery request</AppText>
          <AntDesign
            name="exclamationcircleo"
            size={19}
            color={Colors.primary}
            style={styles.textLogo}
          />
        </View>
      )}
      {type == "waitingRequest" && (
        <View style={styles.statusContainer}>
          <AppText style={styles.status}>Status :</AppText>
          <AppText style={styles.blueText}>
            Waiting for delevery requests
          </AppText>
        </View>
      )}
      {type == "finished" && (
        <View style={styles.statusContainer}>
          <AppText style={styles.status}>Status :</AppText>
          <AppText style={styles.price}>Delevered</AppText>
        </View>
      )}
      <View style={styles.priceContainer}>
        <AppText style={styles.price}>{price}</AppText>
        <AppText style={styles.currency}>{currency}</AppText>
      </View>
      {type != "finished" && (
        <View style={styles.reminingContainer}>
          <AppText style={styles.blueText}>remining : </AppText>
          <AppText style={styles.reminingText}>{reminingTime}</AppText>
        </View>
      )}
      {!here && !showPopMenu && (
        <TouchableOpacity style={styles.menuBtn} onPress={hundleMenuPress}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={Colors.borders}
          />
        </TouchableOpacity>
      )}
      {!here && showPopMenu && (
        <Animatable.View
          animation="jello"
          duration={1000}
          style={styles.popMenu}
          onPress={hundleMenuPress}
        >
          <TouchableOpacity
            onPress={showDeleveryReq}
            style={[
              styles.deleveringIcon,
              styles.deleveringPosition,
              { backgroundColor: Colors.lime },
            ]}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={21}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={hundlePause}
            style={[
              styles.deleveringIcon,
              styles.deleveringPosition,
              { backgroundColor: Colors.coldBlue },
            ]}
          >
            <FontAwesome name="pause" size={19} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={editReciept}
            style={[
              styles.deleveringIcon,
              styles.deleveringPosition,
              { backgroundColor: Colors.borders },
            ]}
          >
            <FontAwesome
              name="pencil-square-o"
              size={23}
              color={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowPopMenu(false);
              if (deleteReciept != undefined) deleteReciept();
            }}
            style={[
              styles.deleveringIcon,
              styles.deleveringPosition,
              { backgroundColor: Colors.eliminatedRed },
            ]}
          >
            <Feather name="x" size={30} color="white" />
          </TouchableOpacity>
        </Animatable.View>
      )}
      {here && (
        <Animatable.View
          style={styles.here}
          animation="swing"
          iterationCount="infinite"
          duration={1200}
        >
          <TouchableOpacity onPress={showFinishedModal}>
            <AppText style={styles.hereText}>Its here!</AppText>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.borders,
    borderRadius: 20,
    width: "85%",
    height: 130,
    marginVertical:15,
    alignSelf:'center',
  },
  deleveringIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  reciept_ID: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 16,
    position: "absolute",
    top: 20,
    left: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 48,
    left: 13.5,
  },
  status: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 16,
    marginRight: 3,
  },
  truck: {
    marginLeft: 6,
  },
  blueText: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 15,
  },
  num_request: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.primary,
    fontSize: 16,
    marginHorizontal: 2,
  },
  textLogo: {
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    left: 15,
  },
  price: {
    color: Colors.lime,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    lineHeight: 22,
    marginRight: 2,
  },
  currency: {
    color: Colors.primary,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    lineHeight: 22,
  },
  reminingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 8,
    right: 15,
  },
  reminingText: {
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
    marginLeft: 4,
  },
  menuBtn: {
    position: "absolute",
    bottom: 8,
    right: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  here: {
    position: "absolute",
    bottom: 8,
    right: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 76,
    height: 35,
    borderRadius: 30,
  },
  hereText: {
    color: Colors.white,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 14,
  },
  popMenu: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 200,
    height: 50,
    padding: 6,
    borderTopColor: Colors.stroke,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderLeftColor: Colors.stroke,
    borderLeftWidth: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomColor: Colors.stroke,
    borderBottomWidth: 1,
    borderBottomRightRadius:20
  },
});
