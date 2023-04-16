import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import styles from './style/index';
import CategoriesItem from '@components/categories_item';
import { useQuery } from '@tanstack/react-query';
import {
  Product,
  fetchCategoriesNames,
  fetchProductsByCategoryID,
} from '@api/firebase/firebase.utils';
import Colors from '@components/config/Colors';
import { useState } from 'react';
import ProductItem from '@components/product_item';
import milk from '@toPng/milk_candia.png';
import AppText from '@components/basic/app_text';
import ItemShowcase from '@containers/modals/item_showcase';
import { useOverlayStore } from '@stores/overlayStore';

interface ProductsPanelProps {
  products?: Product[];
}
export default function ProductsPanel({ products }: ProductsPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {
    isLoading,
    error,
    data: categories,
    isSuccess: categoriesIsSuccess,
  } = useQuery({
    queryKey: ['categoriesNames'],
    queryFn: fetchCategoriesNames,
    enabled: !products,
  });
  const selectedCategory = categoriesIsSuccess
    ? categories[selectedIndex]
    : undefined;
  const {
    isLoading: selectedCategoryIsLoading,
    isFetching: selectedCategoryIsFetching,
    error: selectedCategorieError,
    data: queryProducts,
    isSuccess: selectedCategoryIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['products', selectedCategory?.id],
    queryFn: () => {
      if (selectedCategory)
        return fetchProductsByCategoryID(selectedCategory.id);
    },
    enabled: !!selectedCategory && !products,
  });
  const { modal, close } = useOverlayStore();
  return (
    <View style={styles.ProductsPanel}>
      {products ? (
        <FlatList
          data={products}
          renderItem={({ item }) => {
            if (!item) return null;
            return (
              <ProductItem
                name={item.name}
                price={item.brands[0].variants[0].price.amount.toString()}
                tag={item.brands[0].variants[0].price.currency}
                image={milk}
                onPress={() => {
                  modal(<ItemShowcase product={item} />).open();
                }}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          numColumns={2}
          style={styles.productsListContainer}
          contentContainerStyle={styles.productsList}
          scrollEnabled={true}
          columnWrapperStyle={styles.columnWrapper}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <AppText text="no products with this name!" />
            </View>
          }
        />
      ) : isLoading ? (
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
            {categories?.map(({ id, name }, index) => (
              <CategoriesItem
                name={name}
                key={id}
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
            selectedCategoryIsSuccess && (
              // <AppText text="no data" />
              <FlatList
                data={queryProducts}
                renderItem={({ item }) => {
                  if (!item) return null;
                  //TODO  fix the images url in firebase
                  return (
                    <ProductItem
                      name={item.name}
                      price={item.brands[0].variants[0].price.amount.toString()}
                      tag={item.brands[0].variants[0].price.currency}
                      image={milk}
                      onPress={() => {
                        modal(<ItemShowcase product={item} />).open();
                      }}
                    />
                  );
                }}
                keyExtractor={(item) => {
                  return item.id;
                }}
                numColumns={2}
                style={styles.productsListContainer}
                contentContainerStyle={styles.productsList}
                scrollEnabled={true}
                columnWrapperStyle={styles.columnWrapper}
                showsHorizontalScrollIndicator={false}
                refreshing={true}
                refreshControl={
                  <RefreshControl
                    refreshing={isLoading}
                    onRefresh={refetch}
                    progressBackgroundColor={Colors.primary}
                    colors={[Colors.white]}
                  >
                    <ActivityIndicator color={Colors.primary} size={50} />
                  </RefreshControl>
                }
                ListEmptyComponent={
                  <View>
                    <AppText text="no products with this name!" />
                  </View>
                }
              />
            )
          )}
        </View>
      )}
    </View>
  );
}
