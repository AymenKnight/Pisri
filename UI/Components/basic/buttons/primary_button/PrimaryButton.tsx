import Colors from '@components/config/Colors';
import AppButton from '../text_button/TextButton';
import { View, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  text?: string;
  onPress?: () => void;
  style?: ViewStyle;

  icon?: ReactNode;
}
export default function PrimaryButton({
  text,
  onPress,

  style,
  icon,
}: PrimaryButtonProps) {
  return (
    <AppButton
      text={text}
      onPress={onPress}
      style={{ alignSelf: 'stretch', ...style }}
      backgroundColor={Colors.primary}
      icon={
        icon ? (
          <View style={{ position: 'absolute', right: '5%' }}>{icon}</View>
        ) : undefined
      }
      padding={10}
      borderRadius={15}
      textStyle={{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }}
    />
  );
}
