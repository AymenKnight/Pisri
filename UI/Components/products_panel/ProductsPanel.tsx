import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import styles from './style/index';
import CategoriesItem from '@components/categories_item';
import { useQuery } from '@tanstack/react-query';
import {
  fetchCategoriesNames,
  fetchProductsByCategoryName,
} from '@api/firebase/firebase.utils';
import Colors from '@components/config/Colors';
import { useState } from 'react';
import ProductItem from '@components/product_item';
import milk from '@toPng/milk_candia.png';

const windowWidth = Dimensions.get('window').width;
interface ProductsPanelProps {}
export default function ProductsPanel({}: ProductsPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {
    isLoading,
    error,
    data: categories,
    isSuccess: categoriesIsSuccess,
  } = useQuery({
    queryKey: ['categoriesNames'],
    queryFn: fetchCategoriesNames,
  });
  const selectedCategory = categoriesIsSuccess
    ? categories[selectedIndex]
    : undefined;
  const {
    isLoading: selectedCategoryIsLoading,
    isFetching: selectedCategoryIsFetching,
    error: selectedCategorieError,
    data: categoryData,
    isSuccess: selectedCategorieIsSuccess,
  } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProductsByCategoryName(selectedCategory),
    enabled: !!selectedCategory,
  });

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
        <View style={styles.ProductsPanelContainer}>
          <ScrollView
            pagingEnabled={false}
            style={styles.pickerContainer}
            horizontal={true}
            centerContent={true}
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
          {selectedCategoryIsLoading || selectedCategoryIsFetching ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator color={Colors.primary} size={50} />
            </View>
          ) : (
            selectedCategorieIsSuccess && (
              <FlatList
                data={categoryData.products}
                renderItem={({ item }) => {
                  if (!item) return null;
                  //TODO  fix the images url in firebase
                  return (
                    <ProductItem
                      name={item.name}
                      price={item.price}
                      tag={item.tag}
                      image={milk}
                    />
                  );
                }}
                keyExtractor={(item) => {
                  if (!item) return null;
                  return item.id;
                }}
                numColumns={2}
                style={styles.productsListContainer}
                contentContainerStyle={styles.productsList}
                scrollEnabled={true}
                columnWrapperStyle={styles.columnWrapper}
              />
            )
          )}
        </View>
      )}
    </View>
  );
}
