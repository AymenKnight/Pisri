import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  MyBagScreen: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 20,
    paddingHorizontal: 20,
    maxHeight: screenHeight * 0.7,
  },
  bigTitle: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 40,
  },
});
