import { ScrollView, View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useStepProgressStore } from '@stores/stepProgressStore';
import BorderContainer from '@containers/border_container';
import PaymentItem from '@components/payment_item';
import { StackNavigationProp } from '@react-navigation/stack';
import { StepStackParamList } from '@navigation/step_navigator/StepNavigator';
import { useNavigation } from '@react-navigation/native';
import routes from '@navigation/routes';

type NavigationProp = StackNavigationProp<StepStackParamList>;
interface PaymentMethodStepProps {}
export default function PaymentMethodStep({}: PaymentMethodStepProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.PaymentMethodStep}>
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
          navigation.navigate(routes.ConfirmationStep);
        }}
      />
    </ScrollView>
  );
}
