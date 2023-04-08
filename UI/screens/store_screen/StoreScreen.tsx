import { View } from 'react-native';
import styles from './style/index';
import TopNavigation from '@components/top_navigation';
import AppTextInput from '@components/basic/inputs/app_text_input';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';
import font from '@components/config/font';
import CategoriesItem from '@components/categories_item';
import ProductsPanel from '@components/products_panel';
import { QueryClient } from '@tanstack/react-query';

interface StoreScreenProps {}
export default function StoreScreen({}: StoreScreenProps) {
  return (
    <View style={styles.StoreScreen}>
      <AppTextInput
        expoIcon={{
          expoIconLibrary: 'FontAwesome',
          expoIconName: 'search',
          size: 20,
          onPress: () => {
            //TODO fetch the entred product
          },
        }}
        width={'80%'}
        alignSelf="center"
        itemsDirection="row-reverse"
      />
      <AppText text="Categories" style={styles.bigTitle} />
      <ProductsPanel />
    </View>
  );
}
