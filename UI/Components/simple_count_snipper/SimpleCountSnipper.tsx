import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Entypo } from '@expo/vector-icons';
import AppText from '@components/basic/app_text';
import Colors from '@components/config/Colors';

interface SimpleCountSnipperProps {
  value: number;
  onMinus?: () => void;
  onPlus?: () => void;
}
export default function SimpleCountSnipper({
  value,
  onMinus,
  onPlus,
}: SimpleCountSnipperProps) {
  return (
    <View style={styles.SimpleCountSnipper}>
      <AppButton
        icon={
          <AntDesign name="minus" size={25} color={Colors.Unfocused_Blue} />
        }
        onPress={onMinus}
        padding={0}
      />
      <AppText text={value} style={styles.value} />
      <AppButton
        icon={<Entypo name="plus" size={25} color={Colors.borders} />}
        onPress={onPlus}
        padding={0}
      />
    </View>
  );
}
