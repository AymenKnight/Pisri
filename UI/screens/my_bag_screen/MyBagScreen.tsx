import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import BagPanel from '@components/bag_panel';
import routes from '@navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '@navigation/home_navigator/HomeNavigator';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainStackParamList } from '@navigation/main_navigator/MainNavigator';

type MyBagScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'MyBag'>,
  StackNavigationProp<MainStackParamList>
>;
interface MyBagScreenProps {
  navigation: MyBagScreenNavigationProp;
}
export default function MyBagScreen({ navigation }: MyBagScreenProps) {
  return (
    <View style={styles.MyBagScreen}>
      <AppText text="My Bag" style={styles.bigTitle} />
      <BagPanel />
      <PrimaryButton
        text="Checkout"
        onPress={() => {
          navigation.navigate(routes.Check);
        }}
      />
    </View>
  );
}
