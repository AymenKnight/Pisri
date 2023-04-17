import styles from './style/index';
import AppText from '@components/basic/app_text';

interface BagOptionProps {
  text: string | number;
}
export default function BagOption({ text }: BagOptionProps) {
  return <AppText text={text} style={styles.BagOption} />;
}
