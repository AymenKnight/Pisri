import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import PrimaryButton from '@components/basic/buttons/primary_button';
import BorderSeparator from '@components/border_separator';
import Colors from '@components/config/Colors';
import BagPanel from '@components/bag_panel';
import { useBagStore } from '@stores/bagStore';

interface MyBagScreenProps {}
export default function MyBagScreen({}: MyBagScreenProps) {
  return (
    <View style={styles.MyBagScreen}>
      <AppText text="My Bag" style={styles.bigTitle} />
      <BagPanel />
      <BorderSeparator borderColor={Colors.primary} />
      <PrimaryButton text="Checkout" />
    </View>
  );
}
