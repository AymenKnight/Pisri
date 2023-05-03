import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';

interface ConfirmStepProps {}
export default function ConfirmStep({}: ConfirmStepProps) {
  return (
    <View style={styles.ConfirmStep}>
      <AppText text="Step 3: Confirm and publish!" style={styles.stepName} />
    </View>
  );
}
