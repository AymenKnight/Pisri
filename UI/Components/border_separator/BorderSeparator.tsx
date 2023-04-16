import { View } from 'react-native';
import styles from './style/index';
import Colors from '@components/config/Colors';

interface BorderSeparatorProps {
  borderColor?: string;
}
export default function BorderSeparator({
  borderColor = Colors.borders,
}: BorderSeparatorProps) {
  return (
    <View style={[styles.BorderSeparator, { borderColor: borderColor }]}></View>
  );
}
