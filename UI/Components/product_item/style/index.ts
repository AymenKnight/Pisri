import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ProductItem: {},
  ProductItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: 'solid',
    overflow: 'hidden',
    width: 150,
    gap: 10,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  price: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 16,
  },
  tag: {
    alignSelf: 'flex-end',
    color: Colors.primary,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 13,
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
});
