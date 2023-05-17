import styles from './style/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '@navigation/routes';
import HomeNavigator from '@navigation/home_navigator';
import TopNavigation from '@components/top_navigation';
import StepNavigator from '@navigation/step_navigator';
import { createStackNavigator } from '@react-navigation/stack';

export type MainStackParamList = {
  HomeTabs: undefined;
  Check: undefined;
};
const MainStack = createStackNavigator<MainStackParamList>();
interface MainNavigatorProps {}
export default function MainNavigator({}: MainNavigatorProps) {
  return (
    <MainStack.Navigator
      screenOptions={{
        header: ({ navigation, options, route, back }) => {
          return (
            <TopNavigation
            // onBack={
            //   route.name === routes.Check ? navigation.goBack : undefined
            // }
            />
          );
        },
      }}
    >
      <MainStack.Screen name={routes.HomeTabs} component={HomeNavigator} />
      <MainStack.Screen name={routes.Check} component={StepNavigator} />
    </MainStack.Navigator>
  );
}
