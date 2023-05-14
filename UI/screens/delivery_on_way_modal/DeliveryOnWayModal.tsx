import { View } from 'react-native';
import styles from './style/index';
import BorderContainer from '@containers/border_container';
import { Feather } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import * as Animatable from 'react-native-animatable';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useOverlayStore } from '@stores/overlayStore';

interface DeliveryOnWayModalProps {}
export default function DeliveryOnWayModal({}: DeliveryOnWayModalProps) {
  const { close } = useOverlayStore();
  return (
    <View style={styles.DeliveryOnWayModal}>
      <BorderContainer>
        <Animatable.View
          animation="bounceIn"
          duration={2000}
          style={styles.successContainer}
        >
          <Feather
            name="truck"
            size={40}
            color={Colors.lime}
            style={styles.logo}
          />
        </Animatable.View>
        <AppText text="Your order is on the way!" style={styles.successText} />
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
              text="2. Please stay tune until the delivery guy arrive at your location."
              style={styles.processText}
            />
            <AppText
              text="3. We will refund you if the delivery fail"
              style={styles.processText}
            />
          </View>
        </View>
        <PrimaryButton text="Close" onPress={close} />
      </View>
    </View>
  );
}
