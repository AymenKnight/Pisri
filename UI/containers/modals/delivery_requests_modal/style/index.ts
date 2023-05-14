import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  DeliveryRequestsModal: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },
  HeaderTextStyle: {
    fontFamily: font.PublicSans_900Black,
    color: Colors.fontColor,
    fontSize: 20,
  },
  ReceiptTextStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 16,
  },
  requestsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: 10,
  },
  description: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 15,
    textAlign: 'center',
  },
  membersContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: 10,
  },
});
