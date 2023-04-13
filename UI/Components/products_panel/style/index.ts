import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  ProductsPanel: {
    flex: 1,
    width: '100%',
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
    alignSelf: 'stretch',
    flex: 1,
    paddingLeft: 10,
  },
  productsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    flexGrow: 1,
    paddingBottom: 100,
  },
  columnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
