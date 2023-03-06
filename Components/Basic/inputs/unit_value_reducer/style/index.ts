import Colors from '@components/config/Colors';
import font from '@components/config/font';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  UnitValueReducer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: 2,
    borderColor: Colors.borders,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignSelf: 'stretch',
  },
  valueText: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  unitText: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.primary,
    fontSize: 13,
  },
});
