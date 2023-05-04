import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  BorderContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignSelf: 'stretch',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.borders,
    padding: 10,
    borderStyle: 'solid',
  },
});
