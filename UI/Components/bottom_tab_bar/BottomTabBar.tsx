import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Colors from '@components/config/Colors';
import routes from '@navigation/routes';

interface CustomBottomTabBarProps {
  props: BottomTabBarProps;
}
export default function BottomTabBar({ props }: CustomBottomTabBarProps) {
  const { state, navigation, descriptors, insets } = props;

  return (
    <View style={styles.BottomTabBar}>
      <AppButton
        icon={
          <AntDesign
            name="shoppingcart"
            size={25}
            color={state.index == 0 ? Colors.primary : Colors.black}
          />
        }
        onPress={() => {
          navigation.navigate(routes.STORE);
        }}
        style={styles.smallButton}
      />
      <AppButton
        icon={<AntDesign name="home" size={30} color={Colors.white} />}
        onPress={() => {
          navigation.navigate(routes.STORE);
        }}
        style={styles.homeButton}
      />
      <AppButton
        icon={
          <Feather
            name="truck"
            size={25}
            color={state.index == 1 ? Colors.primary : Colors.black}
          />
        }
        onPress={() => {
          navigation.navigate(routes.CHECK);
        }}
        style={styles.smallButton}
      />
    </View>
  );
}
