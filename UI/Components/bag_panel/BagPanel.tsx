import { ImageSourcePropType, ScrollView, View } from 'react-native';
import styles from './style/index';
import BagItem from '@components/bag_item';
import { useBagStore } from '@stores/bagStore';
import milk from '@toPng/milk_candia.png';

interface BagPanelProps {}
export default function BagPanel({}: BagPanelProps) {
  const { bagItems, addQuantity, removeQuantity, removeItem } = useBagStore();
  return (
    <ScrollView
      contentContainerStyle={styles.BagPanelContent}
      style={styles.BagPanel}
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
                variant,
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
  );
}
