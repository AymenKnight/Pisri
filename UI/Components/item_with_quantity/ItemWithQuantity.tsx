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
}
export default function ItemWithQuantity({
  value,
  onMinus,
  onPlus,
  image,
  name,
}: ItemWithQuantityProps) {
  return (
    <View style={styles.ItemWithQuantity}>
      <View style={styles.imageContainer}>
        {image && (
          <Image source={image} resizeMode="center" style={styles.image} />
        )}
        <AppText style={styles.name} text={name} />
      </View>
      <CountSnipper value={value} onMinus={onMinus} onPlus={onPlus} />
    </View>
  );
}
