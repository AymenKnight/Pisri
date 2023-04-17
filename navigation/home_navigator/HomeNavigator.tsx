import styles from './style/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '@navigation/routes';
import TopNavigation from '@components/top_navigation';
import StoreScreen from '@screens/store_screen';
import BottomTabBar from '@components/bottom_tab_bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyBagScreen from '@screens/my_bag_screen';

const BottomTab = createBottomTabNavigator();
interface HomeNavigatorProps {}
export default function HomeNavigator({}: HomeNavigatorProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BottomTab.Navigator
        screenOptions={{
          header: (props) => <TopNavigation />,
        }}
        tabBar={(props) => <BottomTabBar props={props} />}
      >
        <BottomTab.Screen name={routes.STORE} component={StoreScreen} />
        <BottomTab.Screen name={routes.CHECK} component={MyBagScreen} />
      </BottomTab.Navigator>
    </QueryClientProvider>
  );
}
