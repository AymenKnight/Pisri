import { View } from 'react-native';
import styles from './style/index';
import { Entypo } from '@expo/vector-icons';
import AppText from '@components/basic/app_text';
import Colors from '@components/config/Colors';
import AppButton from '@components/basic/buttons/text_button/TextButton';

interface NumberInputReducerProps {
  value?: number;
  handleLess?: () => void;
  handleMore?: () => void;
}
export default function NumberInputReducer({
  value = 0,
  handleLess,
  handleMore,
}: NumberInputReducerProps) {
  return (
    <View style={styles.NumberInputReducer}>
      <AppButton
        onPress={handleLess}
        icon={<Entypo name="minus" size={25} color={Colors.borders} />}
      />
      <AppText text={value} style={styles.valueText} />
      <AppButton
        onPress={handleMore}
        icon={<Entypo name="plus" size={25} color={Colors.borders} />}
      />
    </View>
  );
}
