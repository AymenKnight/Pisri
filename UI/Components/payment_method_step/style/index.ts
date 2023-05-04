import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  PaymentMethodStep: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  stepName: {
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 20,
    color: Colors.fontColor,
  },
  hintStyle: {
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
    color: Colors.black,
  },
});
