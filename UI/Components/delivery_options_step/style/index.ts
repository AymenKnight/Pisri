import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  DeliveryOptionsStep: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  stepName: {
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 20,
    color: Colors.fontColor,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
    paddingBottom: 20,
  },
  hintStyle: {
    fontFamily: font.PublicSans_900Black,
    fontSize: 14,
    color: Colors.black,
  },
  noticeStyle: {
    fontFamily: font.PublicSans_700Bold,
    fontSize: 12,
    color: Colors.fontColor,
  },
});
