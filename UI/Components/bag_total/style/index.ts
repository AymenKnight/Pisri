import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  BagTotalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
  },
  BagTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Unfocused_Blue,
    padding: 10,
  },
  numItemsStyle: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 15,
    color: Colors.Unfocused_Blue,
  },
  totalPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  price: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
  },
  tag: {
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
  },
});
