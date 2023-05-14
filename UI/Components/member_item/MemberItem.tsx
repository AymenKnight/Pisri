import {
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface MemberItemProps {
  image: ImageSourcePropType;
  id: number;
  name: string;
  age: number;
  timer: string;
  onPress?: () => void;
}
export default function MemberItem({
  image,
  id,
  name,
  age,
  timer,
  onPress,
}: MemberItemProps) {
  return (
    <TouchableOpacity style={styles.MemberItem} onPress={onPress}>
      <View style={styles.InfoContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.ItemInfoTexts}>
          <AppText text={name} style={styles.infoTextStyle} />
          <AppText text={`Age: ${age}`} style={styles.infoTextStyle} />
        </View>
      </View>
      <View style={styles.timerContainer}>
        <View style={styles.StatusIconContainer}>
          <MaterialCommunityIcons
            name="progress-clock"
            size={20}
            color="white"
          />
        </View>
        <AppText text={timer} style={styles.timeText} />
      </View>
    </TouchableOpacity>
  );
}
