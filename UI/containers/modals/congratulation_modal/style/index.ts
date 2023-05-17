import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  CongratulationModal: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 30,
  },
  congratulationWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  logo: {
    alignSelf: 'center',
  },
  CongratsText: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 24,
    textAlign: 'center',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  TotalText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 14,
  },
  price: {
    color: Colors.goodGreen,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 14,
  },
  tag: {
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 14,
  },
});
