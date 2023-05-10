import { ScrollView, View, Dimensions } from 'react-native';
import styles from './style/index';
import { useEffect, useRef, useState } from 'react';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import * as Animatable from 'react-native-animatable';
import { useStepProgressStore } from '@stores/stepProgressStore';
import DeliveryOptionsStep from '@components/delivery_options_step';
import PaymentMethodStep from '@components/payment_method_step';
import ConfirmStep from '@components/confirm_step';

const screenWidth = Dimensions.get('window').width;
const steps = [
  { component: DeliveryOptionsStep, props: {} },
  { component: PaymentMethodStep, props: {} },
  { component: ConfirmStep, props: {} },
];
interface StepIndicatorProps {}
export default function StepIndicator({}: StepIndicatorProps) {
  const { currentStep, setCurrentStep, isScroll, setIsScroll } =
    useStepProgressStore();
  const scrollViewRef = useRef<ScrollView>(null);
  const currentX = useRef<number>(0);
  const handleChange = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep(currentStep + 1);
      currentX.current = currentX.current + screenWidth;
      scrollViewRef.current?.scrollTo({
        x: currentX.current,
        animated: true,
      });
    } else {
      currentX.current = 0;
      setCurrentStep(0);
      scrollViewRef.current?.scrollTo({
        x: 0,
        animated: true,
      });
    }
    setIsScroll();
  };
  useEffect(() => {
    if (isScroll) handleChange();
  }, [isScroll]);

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
          <ScrollView key={index} contentContainerStyle={[styles.step]}>
            <step.component {...step.props} />
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
}
