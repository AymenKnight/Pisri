import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  AppTextInput: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 5,
    borderRadius: 15,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
  },
  icon: {},
  TextInput: {
    maxWidth: '90%',
    textAlign: 'left',
    flexGrow: 1,
  },
});
