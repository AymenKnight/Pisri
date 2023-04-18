import { Text, TextStyle } from 'react-native';

import { defaultStyle } from '@components/config/styles';

interface AppTextProps {
  style?: TextStyle | TextStyle[];
  text: string | number;
  other?: any;
}
export default function AppText({ style, text, ...other }: AppTextProps) {
  return (
    <Text {...other} style={[defaultStyle.text, style]}>
      {text}
    </Text>
  );
}
