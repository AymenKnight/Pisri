import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import AppButton from '@components/basic/buttons/text_button/TextButton';

interface TipFooterProps {
  tipText: string;
  action: {
    text: string;
    onPress: () => void;
  };
}
export default function TipFooter({ tipText, action }: TipFooterProps) {
  return (
    <View style={styles.TipFooter}>
      <AppText text={tipText} style={styles.tipText} />
      <AppButton
        text={action.text}
        onPress={action.onPress}
        textStyle={styles.actionText}
      />
    </View>
  );
}
