import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Colors from '@components/config/Colors';
import routes from '@navigation/routes';
import AppText from '@components/basic/app_text';
import { useBagStore } from '@stores/bagStore';

interface CustomBottomTabBarProps {
  props: BottomTabBarProps;
}
export default function BottomTabBar({ props }: CustomBottomTabBarProps) {
  const { state, navigation, descriptors, insets } = props;
  const bagItems = useBagStore((bagState) => bagState.bagItems);

  return (
    <View style={styles.BottomTabBar}>
      <AppButton
        icon={
          <AntDesign
            name="shoppingcart"
            size={25}
            color={state.index == 0 ? Colors.primary : Colors.borders}
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
          <View style={styles.numItemsStyle}>
            <Feather
              name="shopping-bag"
              size={25}
              color={state.index == 1 ? Colors.primary : Colors.borders}
              style={{ position: 'relative' }}
            ></Feather>
            {bagItems.length > 0 && (
              <AppText
                style={[
                  styles.numItemsTextStyle,
                  {
                    height: bagItems.length > 9 ? 18 : 15,
                    width: bagItems.length > 9 ? 18 : 15,
                  },
                ]}
                text={bagItems.length}
              />
            )}
          </View>
        }
        onPress={() => {
          navigation.navigate(routes.CHECK);
        }}
        style={styles.smallButton}
      />
    </View>
  );
}
