import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';

interface CountSnipperProps {
  prefix?: string;
  value: number;
  tag?: string;
  onMinus?: () => void;
  onPlus?: () => void;
}
export default function CountSnipper({
  value,
  onMinus,
  onPlus,
  tag,
  prefix,
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
      <View style={styles.valueContainer}>
        <AppText text={`${prefix ?? ''}${value}`} style={styles.value} />
        {tag && <AppText text={tag} style={styles.tag} />}
      </View>

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
