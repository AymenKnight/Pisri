import { AntDesign } from '@expo/vector-icons';
import AppButton from '../text_button/TextButton';
import Colors from '@components/config/Colors';

interface CloseButtonProps {
  onPress?: () => void;
}
export default function CloseButton({ onPress }: CloseButtonProps) {
  return (
    <AppButton
      onPress={onPress}
      backgroundColor={Colors.primary}
      borderRadius={100}
      icon={<AntDesign name="close" size={24} color="white" />}
    />
  );
}
