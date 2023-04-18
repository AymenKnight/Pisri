import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  BottomTabBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 30,
    borderStyle: 'solid',
    // boxShadow: '0px 0px 6px #E97854',
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 5,
  },
  smallButton: { position: 'relative' },
  homeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
  numItemsStyle: {},
  numItemsTextStyle: {
    color: Colors.white,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.hot_red,
    position: 'absolute',
    right: -5,
    top: 0,
    borderRadius: 100,
  },
});
