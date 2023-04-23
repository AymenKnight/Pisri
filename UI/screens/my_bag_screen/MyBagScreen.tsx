import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import BagPanel from '@components/bag_panel';

interface MyBagScreenProps {}
export default function MyBagScreen({}: MyBagScreenProps) {
  return (
    <View style={styles.MyBagScreen}>
      <AppText text="My Bag" style={styles.bigTitle} />
      <BagPanel />
      <PrimaryButton text="Checkout" />
    </View>
  );
}
