import styles from './style/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '@navigation/routes';
import TopNavigation from '@components/top_navigation';
import StoreScreen from '@screens/store_screen';
import BottomTabBar from '@components/bottom_tab_bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyBagScreen from '@screens/my_bag_screen';
import ActivityTopTabNavigator from '@navigation/activity_top_tab_navigator';

export type BottomTabParamList = {
  Store: undefined;
  MyBag: undefined;
  Activity: undefined;
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
interface HomeNavigatorProps {}
export default function HomeNavigator({}: HomeNavigatorProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BottomTab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomTabBar props={props} />}
      >
        <BottomTab.Screen name={routes.Store} component={StoreScreen} />
        <BottomTab.Screen name={routes.MyBag} component={MyBagScreen} />
        <BottomTab.Screen
          name={routes.ACTIVITY}
          component={ActivityTopTabNavigator}
        />
      </BottomTab.Navigator>
    </QueryClientProvider>
  );
}
