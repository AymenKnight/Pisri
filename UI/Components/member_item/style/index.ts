import { StyleSheet } from 'react-native';
import Colors from '@colors';
import font from '@components/config/font';

export default StyleSheet.create({
  MemberItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.Unfocused_Blue,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: { height: 60, width: 60, borderRadius: 100 },
  InfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ItemInfoTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  infoTextStyle: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 14,
  },
  timerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  StatusIconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontFamily: font.PublicSans_700Bold,
    color: Colors.fontColor,
    fontSize: 14,
  },
});
