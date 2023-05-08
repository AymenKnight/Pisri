import { View } from 'react-native';
import styles from './style/index';
import ActivityItem from '@components/activity_item';

interface ActivityScreenProps {}
export default function ActivityScreen({}: ActivityScreenProps) {
  return (
    <View style={styles.ActivityScreen}>
      <ActivityItem />
    </View>
  );
}
