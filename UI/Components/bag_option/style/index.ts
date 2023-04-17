import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  BagOption: {
    fontFamily: font.PublicSans_500Medium,
    color: Colors.fontColor,
    fontSize: 12,
    borderColor: Colors.Unfocused_Blue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
