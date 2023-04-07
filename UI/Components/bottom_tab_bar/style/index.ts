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
  smallButton: {},
  homeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
});
