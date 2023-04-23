import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ItemWithQuantity: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
    borderColor: Colors.borders,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderStyle: 'solid',
    minWidth: 250,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  image: { height: 120, width: 80 },
  name: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 18,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'center',
  },
  price: {
    color: Colors.goodGreen,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 18,
  },
  tag: {
    alignSelf: 'flex-end',
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 15,
  },
});
