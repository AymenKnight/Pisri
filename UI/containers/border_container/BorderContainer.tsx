import { View, ViewStyle } from 'react-native';
import styles from './style/index';

interface BorderContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
export default function BorderContainer({
  children,
  style,
}: BorderContainerProps) {
  return <View style={[styles.BorderContainer, style]}>{children}</View>;
}
