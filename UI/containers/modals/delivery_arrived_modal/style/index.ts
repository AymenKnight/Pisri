import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  DeliveryArrivedModal: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 20,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },
  HeaderTextStyle: {
    fontFamily: font.PublicSans_900Black,
    color: Colors.fontColor,
    fontSize: 20,
  },
  ReceiptTextStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  description: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 15,
    textAlign: 'center',
  },
  codeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  codeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeTextStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.primary,
    fontSize: 15,
  },
  controlsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  notVerifiedTextStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.Unfocused_Blue,
    fontSize: 18,
  },
  verifiedIconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.coldBlue,
    borderRadius: 100,
    padding: 5,
    width: 50,
    height: 50,
  },
  verifiedIconStyle: {},
});
