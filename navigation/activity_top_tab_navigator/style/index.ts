import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  ActivityTopTabNavigator: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  bigTitle: {
    fontFamily: font.PublicSans_800ExtraBold,
    color: Colors.fontColor,
    fontSize: 40,
    paddingLeft: 20,
  },
  tabBarIndicatorStyle: { backgroundColor: Colors.primary },
  tabBarStyle: {},
  tabBarLabelStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 12,
  },
});
