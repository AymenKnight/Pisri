import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';

interface PaymentMethodStepProps {}
export default function PaymentMethodStep({}: PaymentMethodStepProps) {
  return (
    <View style={styles.PaymentMethodStep}>
      <AppText text="Step 2: Payment method" style={styles.stepName} />
      <PrimaryButton
        text="Next"
        style={{ width: '80%', alignSelf: 'center' }}
      />
    </View>
  );
}
