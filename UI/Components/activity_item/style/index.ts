import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ActivityItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.Unfocused_Blue,
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    minHeight: 100,
  },
  StatusIcon: {
    position: 'absolute',
    left: -10,
    top: -10,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    padding: 2,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 2,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ReceiptText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  StatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  StatusTitleText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  StatusText: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 14,
  },
  truckLogo: {},
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
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
  menuButton: {},
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
    position: 'absolute',
    right: 10,
    top: 5,
  },
  timerText: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 13,
  },
  time: {
    color: Colors.primary,
    fontFamily: font.PublicSans_900Black,
    fontSize: 14,
  },
});
