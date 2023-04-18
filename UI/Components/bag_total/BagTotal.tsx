import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import { useBagStore } from '@stores/bagStore';
import BorderSeparator from '@components/border_separator';
import Colors from '@components/config/Colors';

interface BagTotalProps {}
export default function BagTotal({}: BagTotalProps) {
  const bagItems = useBagStore((state) => state.bagItems);
  const totalPrice = bagItems.reduce((total, item) => {
    return total + item.variant.price.amount;
  }, 0);
  return (
    <View style={styles.BagTotalWrapper}>
      {bagItems.length > 0 && (
        <BorderSeparator borderColor={Colors.primary} borderWidth={2} />
      )}
      <View style={styles.BagTotal}>
        <AppText
          text={bagItems.length > 0 ? bagItems.length + ' items' : 'No items'}
          style={styles.numItemsStyle}
        />
        <View style={styles.totalPriceContainer}>
          <AppText text={totalPrice} style={styles.price} />
          <AppText text={'USD'} style={styles.tag} />
        </View>
      </View>
    </View>
  );
}
