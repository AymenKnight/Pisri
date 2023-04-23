import { ScrollView, View } from 'react-native';
import styles from './style/index';
import BagItem from '@components/bag_item';
import { useBagStore } from '@stores/bagStore';
import milk from '@toPng/milk_candia.png';
import BagTotal from '@components/bag_total';

interface BagPanelProps {}
export default function BagPanel({}: BagPanelProps) {
  const { bagItems, addQuantity, removeQuantity, removeItem } = useBagStore();
  return (
    <View style={styles.BagPanel}>
      <ScrollView
        contentContainerStyle={styles.BagPanelScrollViewContent}
        style={styles.BagPanelScrollView}
      >
        {bagItems.map(
          ({ name, brand, costumeDetail, variant, quantity, id }, index) => (
            <BagItem
              key={id}
              image={milk}
              name={name}
              options={
                [
                  brand,
                  variant.volume,
                  costumeDetail.length > 0 && costumeDetail,
                ].filter(Boolean) as string[]
              }
              quantity={quantity}
              onPlus={() => addQuantity(id)}
              onMinus={() => removeQuantity(id)}
              onRemove={() => removeItem(id)}
            />
          ),
        )}
      </ScrollView>

      <BagTotal />
    </View>
  );
}
