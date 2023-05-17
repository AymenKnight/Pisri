import { View } from 'react-native';
import styles from './style/index';
import WelcomeLogo from '@toSvg/welcome_logo.svg';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { auth } from '@api/firebase/firebase.utils';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/main_navigator/MainNavigator';
import routes from '@navigation/routes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@navigation/home_navigator/HomeNavigator';
import Colors from '@components/config/Colors';

type NavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList>,
  BottomTabNavigationProp<BottomTabParamList>
>;
interface TopNavigationProps {}
export default function TopNavigation({}: TopNavigationProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.TopNavigation}>
      {navigation.canGoBack() ? (
        <AppButton
          style={styles.BackButton}
          icon={
            <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <AppButton
          padding={0}
          icon={<Entypo name="menu" size={40} color="black" />}
          onPress={() => {
            navigation.navigate(routes.ACTIVITY);
          }}
        />
      )}
      <WelcomeLogo width={120} />
      <AppButton
        icon={<MaterialIcons name="person-outline" size={30} color="black" />}
        onPress={() => {
          auth.signOut();
        }}
        style={styles.profile}
      />
    </View>
  );
}
