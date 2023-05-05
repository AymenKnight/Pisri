import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ConfirmStep: {
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
  infoWrapper: {
    gap: 15,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  price: {
    color: Colors.goodGreen,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
  },
  tag: {
    alignSelf: 'flex-end',
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 14,
  },
  description: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    color: Colors.fontColor,
  },
  payTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payText: {
    color: Colors.primary,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 18,
  },
  controlsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 10,
  },
  confirmButton: {
    backgroundColor: Colors.goodGreen,
  },
  cancelButton: {
    backgroundColor: Colors.hot_red,
  },
});
