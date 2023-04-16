import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';

interface CountSnipperProps {
  value: number;
  onMinus?: () => void;
  onPlus?: () => void;
}
export default function CountSnipper({
  value,
  onMinus,
  onPlus,
}: CountSnipperProps) {
  return (
    <View style={styles.CountSnipper}>
      <AppButton
        backgroundColor={Colors.borders}
        icon={<AntDesign name="minus" size={18} color="white" />}
        style={{ borderRadius: 0 }}
        padding={5}
        onPress={onMinus}
      />
      <AppText text={'x' + value} style={styles.value} />
      <AppButton
        backgroundColor={Colors.primary}
        icon={<Entypo name="plus" size={18} color="white" />}
        style={{ borderRadius: 0 }}
        padding={5}
        onPress={onPlus}
      />
    </View>
  );
}
