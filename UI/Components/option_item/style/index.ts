import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  OptionItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignSelf: 'stretch',
  },
  titleStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 14,
  },
  controlsContainer: {
    alignSelf: 'center',
    width: '50%',
  },
  hintStyle: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.Unfocused_Blue,
    fontSize: 13,
  },
});
