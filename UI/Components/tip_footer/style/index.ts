import Colors from '@components/config/Colors';
import font from '@components/config/font';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TipFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipText: {
    color: Colors.fontColor,
    fontSize: 18,
    fontFamily: font.PublicSans_600SemiBold,
  },
  actionText: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: font.PublicSans_600SemiBold,
  },
});
