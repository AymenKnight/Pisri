import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  CountSnipper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderTopColor: Colors.borders,
    borderBottomColor: Colors.borders,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    flexGrow: 1,
    textAlign: 'center',
  },
  value: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 14,
  },
  tag: {
    fontFamily: font.PublicSans_900Black,
    color: Colors.primary,
    fontSize: 14,
  },
});
