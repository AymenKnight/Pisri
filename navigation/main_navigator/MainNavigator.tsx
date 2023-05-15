import styles from './style/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '@navigation/routes';
import HomeNavigator from '@navigation/home_navigator';
import TopNavigation from '@components/top_navigation';
import DeliveryFinished from '@screens/delivery_finished';
import StepNavigator from '@navigation/step_navigator';

export type MainStackParamList = {
  HomeTabs: undefined;
  Check: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();
interface MainNavigatorProps {}
export default function MainNavigator({}: MainNavigatorProps) {
  //TODO refactor DeliveryFinished to modal instead
  return (
    <MainStack.Navigator
      screenOptions={{
        header: (props) => <TopNavigation />,
      }}
    >
      <MainStack.Screen name={routes.HomeTabs} component={HomeNavigator} />
      <MainStack.Screen name={routes.Check} component={StepNavigator} />
    </MainStack.Navigator>
  );
}
