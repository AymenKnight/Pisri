import { View } from 'react-native';
import styles from './style/index';
import BorderContainer from '@containers/border_container';
import AppText from '@components/basic/app_text';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';

interface PaymentItemProps {
  name: string;
  description?: string;
  onPress?: () => void;
}
export default function PaymentItem({
  name,
  description,
  onPress,
}: PaymentItemProps) {
  return (
    <AppButton
      text={name}
      textStyle={styles.button}
      onPress={onPress}
      itemsDirection="column"
      style={styles.paymentItem}
    >
      {description && <AppText text={description} style={styles.description} />}
      <SimpleLineIcons
        name="exclamation"
        size={20}
        color={Colors.Unfocused_Blue}
        style={styles.logo}
      />
    </AppButton>
  );
}
