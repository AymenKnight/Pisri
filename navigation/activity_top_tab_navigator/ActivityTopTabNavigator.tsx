import { View } from 'react-native';
import styles from './style/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';
import ActivityTab from '@screens/activity_screen';
import FinishedTab from '@screens/finished_tab';

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
        <Tab.Screen name="Active" component={ActivityTab} />
        <Tab.Screen name="Finished" component={FinishedTab} />
      </Tab.Navigator>
    </View>
  );
}
