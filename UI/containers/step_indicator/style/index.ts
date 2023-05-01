import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  StepIndicator: {},
  step: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  currentStep: { backgroundColor: '#007AFF' },
  completedStep: { backgroundColor: '#2ECC71' },
});
