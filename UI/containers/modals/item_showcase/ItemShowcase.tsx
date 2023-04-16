import { View } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { AntDesign, Feather } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import { useOverlayStore } from '@stores/overlayStore';
import ItemWithQuantity from '@components/item_with_quantity';
import { Product } from '@api/firebase/firebase.utils';
import milk from '@toPng/milk_candia.png';
import BorderSeparator from '@components/border_separator';
import PrimaryButton from '@components/basic/buttons/primary_button';
import OptionSelector from '@components/option_selector';
import { useState } from 'react';
import AppTextInput from '@components/basic/inputs/app_text_input';
import { useBagStore } from '@stores/bagStore';

interface ItemShowcaseProps {
  product: Product;
}
export default function ItemShowcase({ product }: ItemShowcaseProps) {
  const { close } = useOverlayStore();
  const [brandIndex, setBrandIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(0);
  const [costumeDetail, setCostumeDetail] = useState('');

  const addItemToBag = useBagStore((state) => state.addItem);
  return (
    <View style={styles.ItemShowcase}>
      <AppButton
        onPress={close}
        icon={<AntDesign name="close" size={18} color="white" />}
        style={{ backgroundColor: Colors.primary, borderRadius: 100 }}
        padding={5}
      />
      <ItemWithQuantity
        value={quantity}
        name={product.name}
        image={milk}
        onMinus={() => {
          if (quantity > 1) setQuantity(quantity - 1);
        }}
        onPlus={() => setQuantity(quantity + 1)}
      />
      <BorderSeparator />
      <OptionSelector
        label="Brand"
        selectedIndex={brandIndex}
        options={product.brands.map((brand) => brand.name)}
        onselect={(index) => {
          setBrandIndex(index);
          setVariant(0);
        }}
      />
      <OptionSelector
        label="Weight/volume"
        selectedIndex={variant}
        options={product.brands[brandIndex].variants.map((v) => v.volume)}
        onselect={setVariant}
      />
      <AppTextInput
        label="Add costume detail"
        inputProps={{
          value: costumeDetail,
          onChangeText: setCostumeDetail,
          multiline: true,
        }}
      />
      <PrimaryButton
        text="Add to bag"
        icon={<Feather name="shopping-bag" size={20} color={Colors.white} />}
        style={{ width: '70%', alignSelf: 'center' }}
        onPress={() => {
          addItemToBag({
            id: product.id,
            name: product.name,
            brand: product.brands[brandIndex].name,
            variant: product.brands[brandIndex].variants[variant].volume,
            quantity: quantity,
            costumeDetail,
          });
          close();
        }}
      />
    </View>
  );
}
