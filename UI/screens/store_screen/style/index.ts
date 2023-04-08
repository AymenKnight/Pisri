import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  StoreScreen: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  searchField: {
    width: '80%',
    alignSelf: 'center',
  },
  bigTitle: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 40,
  },
  searchIcon: {},
});
