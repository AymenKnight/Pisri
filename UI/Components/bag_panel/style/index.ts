import { Dimensions, StyleSheet } from 'react-native';
import Colors from '@colors';
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  BagPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 20,
    overflow: 'hidden',
    flexGrow: 0,
    maxHeight: '70%',
  },
  BagPanelScrollView: { flexGrow: 0 },
  BagPanelScrollViewContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
  },
});
