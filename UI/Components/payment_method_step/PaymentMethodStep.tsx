import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useStepProgressStore } from '@stores/stepProgressStore';
import BorderContainer from '@containers/border_container';
import PaymentItem from '@components/payment_item';

interface PaymentMethodStepProps {}
export default function PaymentMethodStep({}: PaymentMethodStepProps) {
  const { setIsScroll } = useStepProgressStore();
  return (
    <View style={styles.PaymentMethodStep}>
      <AppText text="Step 2: Payment method" style={styles.stepName} />
      <BorderContainer style={styles.optionsContainer}>
        <AppText
          text="Please select a payment method"
          style={styles.hintStyle}
        />
        <PaymentItem name="PayPal/CreditCard" />
        <PaymentItem name="Mobile Pay" />
        <PaymentItem
          name="Pay on arrive"
          description="this may affect the chance to get a delivery guy"
        />
      </BorderContainer>
      <PrimaryButton
        text="Next"
        style={{ width: '80%', alignSelf: 'center' }}
        onPress={() => {
          setIsScroll();
        }}
      />
    </View>
  );
}
