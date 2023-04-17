import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  BagPanel: { maxHeight: '50%', flexGrow: 0 },
  BagPanelContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
  },
});
