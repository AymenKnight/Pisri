import { ScrollView, View } from 'react-native';
import styles from './style/index';
import { useState } from 'react';
import AppText from '@components/basic/app_text';

const steps = [
  { title: 'Step 1', completed: true },
  { title: 'Step 2', completed: false },
  { title: 'Step 3', completed: false },
  // add more steps here
];
interface StepIndicatorProps {}
export default function StepIndicator({}: StepIndicatorProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {steps.map((step, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === currentStep && styles.currentStep,
            step.completed && styles.completedStep,
          ]}
        >
          <AppText text={step.title} />
        </View>
      ))}
    </ScrollView>
  );
}
