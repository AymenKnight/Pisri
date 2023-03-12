import { StyleSheet } from 'react-native';
import Colors from '@colors';

export default StyleSheet.create({
  Overlay: {},
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    borderColor: Colors.light,
    borderWidth: 2.5,
    borderStyle: 'solid',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    padding: 20,
    paddingTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
