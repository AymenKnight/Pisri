import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  SimpleCountSnipper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 20,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
