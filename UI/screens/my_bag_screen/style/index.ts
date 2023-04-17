import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  MyBagScreen: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
    gap: 10,
    paddingHorizontal: 20,
  },
  bigTitle: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 40,
  },
});
