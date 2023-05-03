import { Dimensions, StyleSheet } from 'react-native';
import Colors from '@colors';
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  StepIndicator: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 20,
  },
  step: {
    width: screenWidth,
    paddingHorizontal: 20,
  },

  stepDotsContainer: {
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
