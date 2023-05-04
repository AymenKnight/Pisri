import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  PaymentItem: {
    position: 'relative',
  },
  name: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    color: Colors.fontColor,
  },
  description: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 10,
    color: Colors.fontColor,
  },
  logo: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: { color: Colors.fontColor },
});
