import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  ActivityTab: {
    flex: 1,
    paddingTop: 20,
  },
  FlatListStyle: {
    alignSelf: 'stretch',
  },
  content: {
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
