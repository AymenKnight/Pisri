import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  ProductsPanel: {
    flex: 1,
  },
  pickerContainer: {
    flexGrow: 0,
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  ProductsPanelContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
  productsListContainer: {
    alignSelf: 'center',
    flex: 1,
  },
  productsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    flexGrow: 1,
    paddingBottom: 50,
  },
  columnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
