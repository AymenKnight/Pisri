import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  SwipeableView: {},
  BagItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.borders,
    borderRadius: 20,
    overflow: 'hidden',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    width: '80%',
  },
  image: { height: 100, width: 80, resizeMode: 'contain' },
  name: {
    fontFamily: font.PublicSans_600SemiBold,
    color: Colors.fontColor,
    fontSize: 18,
  },
  bagOptionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
  },
});
