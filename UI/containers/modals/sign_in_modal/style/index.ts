import Colors from '@components/config/Colors';
import font from '@components/config/font';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  SignInModal: {
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
