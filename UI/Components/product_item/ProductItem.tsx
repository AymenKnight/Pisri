import {
  TouchableWithoutFeedback,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';

interface ProductItemProps {
  onPress?: () => void;
  image: ImageSourcePropType;
  price: string;
  tag: string;
  name: string;
}
export default function ProductItem({
  onPress,
  image,
  price,
  tag,
  name,
}: ProductItemProps) {
  return (
    <TouchableWithoutFeedback style={styles.ProductItem} onPress={onPress}>
      <View style={styles.ProductItemContainer}>
        <View style={styles.priceContainer}>
          <AppText style={styles.price} text={price} />
          <AppText style={styles.tag} text={tag} />
        </View>

        <View style={styles.imageContainer}>
          {image && (
            <Image source={image} resizeMode="center" style={styles.image} />
          )}
          <AppText style={styles.name} text={name} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
