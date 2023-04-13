import { ActivityIndicator, View } from 'react-native';
import styles from './style/index';
import AppTextInput from '@components/basic/inputs/app_text_input';
import Colors from '@components/config/Colors';
import AppText from '@components/basic/app_text';
import ProductsPanel from '@components/products_panel';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import milk from '@toPng/milk_candia.png';
import {
  addCategories,
  addProducts,
  fetchProductsByName,
} from '@api/firebase/firebase.utils';
import ProductItem from '@components/product_item';

interface StoreScreenProps {}
export default function StoreScreen({}: StoreScreenProps) {
  // useEffect(() => {
  //   addCategories();
  //   addProducts();
  // });

  const formik = useFormik({
    initialValues: {
      searchQuery: '',
    },
    onSubmit: () => {},
  });

  const {
    isSuccess,
    isFetching,
    isLoading,
    error,
    data: searchProducts,
  } = useQuery({
    queryKey: ['searchProducts', formik.values.searchQuery],
    queryFn: () => {
      return fetchProductsByName(formik.values.searchQuery);
    },
    enabled: formik.values.searchQuery.trim().length > 0,
  });
  return (
    <View style={styles.StoreScreen}>
      <AppTextInput
        expoIcon={{
          expoIconLibrary: 'FontAwesome',
          expoIconName: 'search',
          size: 20,
          onPress: formik.handleSubmit,
        }}
        width={'80%'}
        alignSelf="center"
        itemsDirection="row-reverse"
        inputProps={{
          onChangeText: (e) => {
            formik.handleChange('searchQuery')(e);
          },
          onBlur: (e) => {
            formik.handleBlur('searchQuery')(e);
          },
          value: formik.values.searchQuery,
          placeholder: 'Search',
        }}
      />

      {formik.values.searchQuery.trim().length > 0 ? (
        isFetching || isLoading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator color={Colors.primary} size={50} />
          </View>
        ) : isSuccess ? (
          searchProducts && searchProducts.length > 0 ? (
            searchProducts.map(({ name, categoryID, id, price }) => (
              <ProductItem
                key={id}
                name={name}
                price={price.amount.toString()}
                tag={price.currency}
                image={milk}
              />
            ))
          ) : (
            <View>
              <AppText text="no products with this name!" />
            </View>
          )
        ) : (
          <View>
            <AppText text="Error" />
          </View>
        )
      ) : (
        <>
          <AppText text="Categories" style={styles.bigTitle} />
          <ProductsPanel />
        </>
      )}
    </View>
  );
}
