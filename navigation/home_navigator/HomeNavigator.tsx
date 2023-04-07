import { View } from 'react-native';
import styles from './style/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import routes from '@navigation/routes';
import TopNavigation from '@components/top_navigation';
import StoreScreen from '@screens/store_screen';
import BottomTabBar from '@components/bottom_tab_bar';
import AppText from '@components/basic/app_text';

const BottomTab = createBottomTabNavigator();
interface HomeNavigatorProps {}
export default function HomeNavigator({}: HomeNavigatorProps) {
  const CheckView = () => (
    <View>
      <AppText text={'Check please'} />
    </View>
  );

  return (
    <BottomTab.Navigator
      screenOptions={{
        header: (props) => <TopNavigation />,
      }}
      tabBar={(props) => <BottomTabBar props={props} />}
      // tabBarOptions={{
      //   style: styles.tabBar,
      //   showLabel: false,
      //   activeTintColor: Colors.primary,
      //   inactiveTintColor: Colors.primary,
      // }}
    >
      {/* <BottomTab.Screen
        name={routes.HOME_Stack}
        component={StoreScreen}
      ></BottomTab.Screen> */}

      <BottomTab.Screen name={routes.STORE} component={StoreScreen} />
      <BottomTab.Screen name={routes.CHECK} component={CheckView} />
    </BottomTab.Navigator>
  );
}
