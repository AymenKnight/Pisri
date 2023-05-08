import { View } from 'react-native';
import styles from './style/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityScreen from '@screens/activity_screen';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';

const Tab = createMaterialTopTabNavigator();
interface ActivityTopTabNavigatorProps {}
export default function ActivityTopTabNavigator({}: ActivityTopTabNavigatorProps) {
  return (
    <View style={styles.ActivityTopTabNavigator}>
      <AppText text="Activity" style={styles.bigTitle} />
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          animationEnabled: true,
          swipeEnabled: true,
          lazy: true,
        })}
      >
        <Tab.Screen name="Active" component={ActivityScreen} />
        <Tab.Screen name="Finished" component={ActivityScreen} />
      </Tab.Navigator>
    </View>
  );
}
