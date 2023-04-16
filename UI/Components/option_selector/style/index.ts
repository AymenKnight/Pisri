import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  OptionSelector: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 10,
  },
  labelStyle: {
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.Unfocused_Blue,
  },
  pickerContainer: {
    flexGrow: 0,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingRight: 10,
  },
});
