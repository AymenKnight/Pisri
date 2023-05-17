import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import BorderContainer from '@containers/border_container';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import * as Animatable from 'react-native-animatable';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import CongratulationModal from '../congratulation_modal';
import { useOverlayStore } from '@stores/overlayStore';
interface DeliveryArrivedModalProps {
  receiptId: string;
  verificationCode: string;
  price: {
    amount: number;
    currency: string;
  };
}
export default function DeliveryArrivedModal({
  receiptId,
  verificationCode,
  price,
}: DeliveryArrivedModalProps) {
  const { modal } = useOverlayStore();
  return (
    <View style={styles.DeliveryArrivedModal}>
      <View style={styles.headerContainer}>
        <AppText text="Delivery requests" style={styles.HeaderTextStyle} />
        <AppText
          text={`Receipt #${receiptId}`}
          style={styles.ReceiptTextStyle}
        />
      </View>
      <BorderContainer style={styles.codeWrapper}>
        <AppText
          text="Please provide your delivery guy with the code bellow:"
          style={styles.description}
        />
        <BorderContainer style={styles.codeContainer}>
          <AppText text={verificationCode} style={styles.codeTextStyle} />
        </BorderContainer>
      </BorderContainer>
      <View style={styles.controlsContainer}>
        <AppText text="Not verified" style={styles.notVerifiedTextStyle} />
        {/* <View style={styles.verifiedIconWrapper}>
          <Animatable.View
            // iterationCount="infinite"
            // animation={{
            //   from: {
            //     transform: [{ rotate: '0deg' }],
            //   },
            //   to: {
            //     transform: [{ rotate: '360deg' }],
            //   },
            // }}
            // duration={1000}
            // easing={'linear'}
            style={styles.verifiedIconStyle}
          >
            <Ionicons name="reload" size={35} color="white" />
          </Animatable.View>
        </View> */}
        <AppButton
          onPress={() => {
            modal(<CongratulationModal price={price} />).open();
          }}
          icon={<Ionicons name="reload" size={35} color="white" />}
          style={styles.verifyButton}
        />
      </View>
    </View>
  );
}
