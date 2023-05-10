import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  StepDotHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 20,
    paddingHorizontal: 15,
  },
  stepDot: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: Colors.borders,
  },
  currentDot: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
});
