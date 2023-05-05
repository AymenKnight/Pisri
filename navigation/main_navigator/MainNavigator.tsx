import styles from './style/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepIndicator from '@containers/step_indicator';
import routes from '@navigation/routes';
import HomeNavigator from '@navigation/home_navigator';
import TopNavigation from '@components/top_navigation';
import DeliveryFinished from '@screens/delivery_finished';

export type MainStackParamList = {
  HomeTabs: undefined;
  Check: undefined;
  DeliveryFinished: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();
interface MainNavigatorProps {}
export default function MainNavigator({}: MainNavigatorProps) {
  return (
    <MainStack.Navigator
      screenOptions={{
        header: (props) => <TopNavigation />,
      }}
    >
      <MainStack.Screen name={routes.HomeTabs} component={HomeNavigator} />
      <MainStack.Screen name={routes.Check} component={StepIndicator} />
      <MainStack.Screen
        name={routes.DELIVERY_FINISHED}
        component={DeliveryFinished}
      />
    </MainStack.Navigator>
  );
}
