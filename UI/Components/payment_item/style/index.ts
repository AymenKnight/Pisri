import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  name: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    color: Colors.fontColor,
  },
  description: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 12,
    color: Colors.fontColor,
  },
  logo: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  paymentItem: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: 'solid',
  },
  button: {
    color: Colors.fontColor,
    position: 'relative',
  },
});
