import { View } from 'react-native';
import styles from './style/index';

interface BorderContainerProps {
  children: React.ReactNode;
}
export default function BorderContainer({ children }: BorderContainerProps) {
  return <View style={styles.BorderContainer}>{children}</View>;
}
