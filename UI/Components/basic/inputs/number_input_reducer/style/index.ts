import Colors from '@components/config/Colors';
import font from '@components/config/font';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  NumberInputReducer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    gap: 10,
  },
  valueText: {
    color: Colors.fontColor,
    fontSize: 20,
    fontFamily: font.PublicSans_600SemiBold,
  },
});
