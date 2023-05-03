import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import Colors from '@components/config/Colors';
import { MaterialIcons } from '@expo/vector-icons';

interface DeliveryOptionsStepProps {}
export default function DeliveryOptionsStep({}: DeliveryOptionsStepProps) {
  return (
    <View style={styles.DeliveryOptionsStep}>
      <AppText text="Step 1: Delivery options" style={styles.stepName} />
      <View style={styles.footerContainer}>
        <PrimaryButton
          text="Next"
          // icon={
          //   <MaterialIcons name="location-on" size={20} color={Colors.white} />
          // }
          style={{ width: '80%', alignSelf: 'center' }}
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
