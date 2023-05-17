import { View } from 'react-native';
import styles from './style/index';
import BorderContainer from '@containers/border_container';
import AppText from '@components/basic/app_text';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import * as Animatable from 'react-native-animatable';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useOverlayStore } from '@stores/overlayStore';

interface CongratulationModalProps {
  price: {
    amount: number;
    currency: string;
  };
}
export default function CongratulationModal({
  price,
}: CongratulationModalProps) {
  const { close } = useOverlayStore();
  return (
    <View style={styles.CongratulationModal}>
      <BorderContainer style={styles.congratulationWrapper}>
        <Animatable.View animation="bounceIn" duration={3000}>
          <SimpleLineIcons
            name="check"
            size={70}
            color={Colors.lime}
            style={styles.logo}
          />
        </Animatable.View>
        <AppText text="Congrats!" style={styles.CongratsText} />
        <View style={styles.priceContainer}>
          <AppText text="Total cost:" style={styles.TotalText} />
          <AppText text={price.amount} style={styles.price} />
          <AppText text={price.currency} style={styles.tag} />
        </View>
        <AppText text={`Delivered By: John Doe`} style={styles.TotalText} />
      </BorderContainer>
      <PrimaryButton text="Close" onPress={close} />
    </View>
  );
}
