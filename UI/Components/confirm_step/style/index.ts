import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ConfirmStep: { flex: 1, display: 'flex', flexDirection: 'column' },
  stepName: {
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 20,
    color: Colors.fontColor,
  },
});
