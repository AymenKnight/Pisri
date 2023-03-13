import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  SignUpModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  headerTitle: {
    color: Colors.fontColor,
    fontSize: 35,
    fontFamily: font.PublicSans_700Bold,
    alignSelf: 'center',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
    alignSelf: 'stretch',
  },
});
