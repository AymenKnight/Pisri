import { View } from 'react-native';
import styles from './style/index';
import BorderContainer from '@containers/border_container';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import * as Animatable from 'react-native-animatable';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/main_navigator/MainNavigator';
import routes from '@navigation/routes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@navigation/home_navigator/HomeNavigator';

type NavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'DeliveryFinished'>,
  BottomTabNavigationProp<BottomTabParamList>
>;
interface DeliveryFinishedProps {}
export default function DeliveryFinished({}: DeliveryFinishedProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.DeliveryFinished}>
      <BorderContainer>
        <Animatable.View
          animation="bounceIn"
          duration={2000}
          style={styles.successContainer}
        >
          <SimpleLineIcons
            name="check"
            size={60}
            color={Colors.lime}
            style={styles.logo}
          />
        </Animatable.View>
        <AppText
          text="Your request has been published successfully"
          style={styles.successText}
        />
      </BorderContainer>
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <AppText text="To let you know:" style={styles.headerText} />
          <View style={styles.processTextContainer}>
            <AppText
              text="1. We will notify you when a delivery guy accept your request."
              style={styles.processText}
            />
            <AppText
              text="2. Please stay tune so you will not lose your delivery guy."
              style={styles.processText}
            />
            <AppText
              text="3. We will refund you if the delivery fail"
              style={styles.processText}
            />
          </View>
        </View>
        <PrimaryButton
          text="Continue"
          onPress={() => {
            navigation.navigate(routes.ACTIVITY);
          }}
        />
      </View>
    </View>
  );
}
