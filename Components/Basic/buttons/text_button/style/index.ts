import Colors from '@colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 8,
    marginVertical: 10,
  },

  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
