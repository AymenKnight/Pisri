import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  DeliveryFinished: {
    display: 'flex',
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
  },
  successContainer: {
    alignItems: 'center',
    gap: 10,
  },
  logo: {},
  successText: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    color: Colors.fontColor,
    textAlign: 'center',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  infoContainer: { display: 'flex', flexDirection: 'column', gap: 10 },
  headerText: {
    fontFamily: font.PublicSans_700Bold,
    fontSize: 20,
    color: Colors.primary,
  },
  processTextContainer: { display: 'flex', flexDirection: 'column', gap: 5 },
  processText: {
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 16,
    color: Colors.fontColor,
    textAlign: 'left',
  },
});
