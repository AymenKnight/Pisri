import { View } from 'react-native';
import styles from './style/index';
import { Entypo } from '@expo/vector-icons';
import AppText from '@components/basic/app_text';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import Colors from '@components/config/Colors';

interface UnitValueReducerProps {
  value?: number | string;
  unit?: string;
  handleLess?: () => void;
  handleMore?: () => void;
}
export default function UnitValueReducer({
  value = 0,
  handleLess,
  handleMore,
  unit,
}: UnitValueReducerProps) {
  return (
    <View style={styles.UnitValueReducer}>
      <AppButton
        onPress={handleLess}
        icon={<Entypo name="minus" size={25} color={Colors.white} />}
        style={{
          backgroundColor: Colors.borders,
          borderRadius: 0,
        }}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.valueText} text={value} />
        {unit && <AppText style={styles.unitText} text={unit} />}
      </View>
      <AppButton
        onPress={handleMore}
        icon={<Entypo name="plus" size={25} color={Colors.white} />}
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 0,
        }}
      />
    </View>
  );
}
