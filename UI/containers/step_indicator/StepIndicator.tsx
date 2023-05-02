import { ScrollView, View, Dimensions } from 'react-native';
import styles from './style/index';
import { useRef, useState } from 'react';
import AppText from '@components/basic/app_text';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import * as Animatable from 'react-native-animatable';

const screenWidth = Dimensions.get('window').width;
const steps = [
  { title: 'Step 1', completed: true },
  { title: 'Step 2', completed: false },
  { title: 'Step 3', completed: false },
];
interface StepIndicatorProps {}
export default function StepIndicator({}: StepIndicatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={styles.StepIndicator}>
      <View style={styles.stepDotsContainer}>
        {steps.map((step, index) => (
          <Animatable.View
            transition={['width', 'height', 'backgroundColor']}
            key={index}
            style={[styles.stepDot, index <= currentStep && styles.currentDot]}
          />
        ))}
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        pagingEnabled={true}
      >
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
      <AppButton
        text="Next"
        onPress={() => {
          if (currentStep !== steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setCurrentX(currentX + screenWidth);
            scrollViewRef.current?.scrollTo({
              x: currentX + screenWidth,
              animated: true,
            });
          }
        }}
      />
    </View>
  );
}
