import { ScrollView, View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { MaterialIcons } from '@expo/vector-icons';
import OptionItem from '@components/option_item';
import BorderContainer from '@containers/border_container';
import { StackNavigationProp } from '@react-navigation/stack';
import { StepStackParamList } from '@navigation/step_navigator/StepNavigator';
import { useNavigation } from '@react-navigation/native';
import routes from '@navigation/routes';

type NavigationProp = StackNavigationProp<StepStackParamList>;

interface DeliveryOptionsStepProps {}
export default function DeliveryOptionsStep({}: DeliveryOptionsStepProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView contentContainerStyle={styles.DeliveryOptionsStep}>
      <AppText text="Step 1: Delivery options" style={styles.stepName} />
      <BorderContainer>
        <OptionItem
          title="The offer stay alive for:"
          description="how long your offer stay on waiting list"
          value={3}
        />
        <OptionItem
          title="Deliver time:"
          description="maximum time to deliver the product"
          value={3}
        />
        <OptionItem
          title="Distance:"
          description="how far your order can be announced"
          value={200}
          tag="M"
        />
        <OptionItem
          title="Tip:"
          description="you have to pay the delivery guy right?"
          value={3}
          tag="Dzd"
        />
      </BorderContainer>
      <View style={styles.footerContainer}>
        <PrimaryButton
          text="Next"
          // icon={
          //   <MaterialIcons name="location-on" size={20} color={Colors.white} />
          // }
          style={{ width: '80%', alignSelf: 'center' }}
          onPress={() => {
            navigation.navigate(routes.PaymentMethodStep);
          }}
        />
        <AppText
          text="Please enable Gps and press on verify"
          style={styles.hintStyle}
        />
        <AppText
          text="Notice: we need your location to in order to deliver our services"
          style={styles.noticeStyle}
        />
      </View>
    </ScrollView>
  );
}
