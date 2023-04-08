import { ActivityIndicator, ScrollView, View } from 'react-native';
import styles from './style/index';
import CategoriesItem from '@components/categories_item';
import { useQuery } from '@tanstack/react-query';
import { fetchCategoriesNames } from '@api/firebase/firebase.utils';
import Colors from '@components/config/Colors';
import { useState } from 'react';

interface ProductsPanelProps {}
export default function ProductsPanel({}: ProductsPanelProps) {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ['categoriesNames'],
    queryFn: fetchCategoriesNames,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.ProductsPanel}>
      {isLoading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator color={Colors.primary} size={50} />
        </View>
      ) : (
        <ScrollView
          pagingEnabled={false}
          style={styles.pickerContainer}
          horizontal={true}
          centerContent={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.categoriesContainer]}
        >
          {categories?.map((category, index) => (
            <CategoriesItem
              name={category}
              key={index}
              selected={selectedIndex == index}
              onPress={() => setSelectedIndex(index)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
