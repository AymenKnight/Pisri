import { View } from 'react-native';
import styles from './style/index';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { StepStackParamList } from '@navigation/step_navigator/StepNavigator';

interface StepDotHeaderProps {
  routeNames: string[];
  index: number;
}
export default function StepDotHeader({
  index,
  routeNames,
}: StepDotHeaderProps) {
  return (
    <View style={styles.StepDotHeader}>
      {routeNames.map((_, i) => (
        <Animatable.View
          transition={['width', 'height', 'backgroundColor']}
          key={i}
          style={[styles.stepDot, i <= index && styles.currentDot]}
        />
      ))}
    </View>
  );
}
