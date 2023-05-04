import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import CountSnipper from '@components/count_snipper';

interface OptionItemProps {
  title: string;
  description: string;
  tag?: string;
  value: number;
  onMinus?: () => void;
  onPlus?: () => void;
}
export default function OptionItem({
  title,
  description,
  value,
  tag,
  onPlus,
  onMinus,
}: OptionItemProps) {
  return (
    <View style={styles.OptionItem}>
      <AppText text={title} style={styles.titleStyle} />
      <AppText text={description} style={styles.hintStyle} />
      <View style={styles.controlsContainer}>
        <CountSnipper
          value={value}
          tag={tag}
          onMinus={onMinus}
          onPlus={onPlus}
        />
      </View>
    </View>
  );
}
