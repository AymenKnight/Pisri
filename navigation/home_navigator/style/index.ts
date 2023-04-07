import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  HomeNavigator: {},
  tabBar: {
    alignSelf: 'center',
    width: '85%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 0,
    position: 'absolute',
    left: '7.5%',
    bottom: 15,
  },
  tab1: {
    position: 'absolute',
    left: 25,
  },
  tab4: {
    position: 'absolute',
    right: 27,
  },
});
