import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../Basic/AppText'
import { SimpleLineIcons } from "@expo/vector-icons"; 
import Colors from '../config/Colors';
import font from '../config/font';
import { responsiveScreenHeight, responsiveScreenWidth,} from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';

export default function PaymentOption({centerTitle,subtitle,}) {
    return (
      <TouchableOpacity style={styles.container}>
        <View  style={{marginBottom:5}} >
          <AppText style={styles.centerTitle}> {centerTitle} </AppText>
        </View>

        {subtitle &&  <AppText style={styles.subtitle}> {subtitle} </AppText>}
        <SimpleLineIcons
          name="exclamation"
          size={20}
          color={Colors.stroke}
          style={styles.logo}
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15,
    paddingVertical: 15,
    width: responsiveScreenWidth(75),
    height:responsiveScreenHeight(9),
    justifyContent:'center',
    alignItems:'center',
  },
  centerTitle: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 15,
    textAlign: "center",
    
  },
  subtitle: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 11,
    textAlign: "center",
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    lineHeight:15,
  },
  logo: {
    position: "absolute",
    right: 10,
    top:10,
  },
});
