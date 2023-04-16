import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  CountSnipper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 14,
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
});
