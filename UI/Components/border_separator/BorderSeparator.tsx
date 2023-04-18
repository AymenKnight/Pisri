import { View } from 'react-native';
import styles from './style/index';
import Colors from '@components/config/Colors';

interface BorderSeparatorProps {
  borderColor?: string;
  borderWidth?: number;
}
export default function BorderSeparator({
  borderColor = Colors.borders,
  borderWidth = 1,
}: BorderSeparatorProps) {
  return (
    <View
      style={[
        styles.BorderSeparator,
        { borderColor: borderColor, borderWidth: borderWidth },
      ]}
    ></View>
  );
}
