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
});
