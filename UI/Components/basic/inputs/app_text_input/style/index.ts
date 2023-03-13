import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 5,
    overflow: 'hidden',
  },
  labelStyle: {
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '600',
  },
  AppTextInput: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 5,
    borderRadius: 15,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    maxHeight: 55,
  },
  icon: {},
  TextInput: {
    maxWidth: '90%',
    textAlign: 'left',
    flexGrow: 1,
  },
  errorStyle: { color: 'red' },
});
