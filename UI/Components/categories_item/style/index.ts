import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  selectedButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  selectedText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.white,
    fontSize: 15,
  },
  unselectedButton: {
    borderColor: Colors.Unfocused_Blue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  unselectedText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 15,
  },
});
