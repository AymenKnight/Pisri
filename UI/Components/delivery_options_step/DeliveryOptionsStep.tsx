import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { MaterialIcons } from '@expo/vector-icons';
import OptionItem from '@components/option_item';
import BorderContainer from '@containers/border_container';
import { useStepProgressStore } from '@stores/stepProgressStore';

interface DeliveryOptionsStepProps {}
export default function DeliveryOptionsStep({}: DeliveryOptionsStepProps) {
  const { setIsScroll } = useStepProgressStore();
  return (
    <View style={styles.DeliveryOptionsStep}>
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
            setIsScroll();
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
    </View>
  );
}
