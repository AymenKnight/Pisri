import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  TopNavigation: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 'auto',
  },
  profile: {
    borderColor: Colors.stroke,
    borderWidth: 2,
    borderRadius: 100,
    borderStyle: 'solid',
  },
  BackButton: {
    backgroundColor: Colors.primary,
    padding: 0,
    borderRadius: 100,
  },
});
