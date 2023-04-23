import { Image, ImageSourcePropType, View } from 'react-native';
import styles from './style/index';
import CountSnipper from '@components/count_snipper';
import AppText from '@components/basic/app_text';

interface ItemWithQuantityProps {
  value: number;
  onMinus?: () => void;
  onPlus?: () => void;
  image: ImageSourcePropType;
  name: string;
  price: string;
  tag: string;
}
export default function ItemWithQuantity({
  value,
  onMinus,
  onPlus,
  image,
  name,
  price,
  tag,
}: ItemWithQuantityProps) {
  return (
    <View style={styles.ItemWithQuantity}>
      <View style={styles.imageContainer}>
        {image && (
          <Image source={image} resizeMode="center" style={styles.image} />
        )}
        <AppText style={styles.name} text={name} />
      </View>
      <View style={styles.priceContainer}>
        <AppText style={styles.price} text={price} />
        <AppText style={styles.tag} text={tag} />
      </View>
      <CountSnipper value={value} onMinus={onMinus} onPlus={onPlus} />
    </View>
  );
}
