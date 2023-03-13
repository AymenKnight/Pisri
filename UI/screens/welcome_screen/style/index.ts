import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  WelcomeScreen: {
    display: 'flex',
    flexGrow: 1,
  },
  ImageBackground: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexGrow: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
  controlsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 20,
  },
  logo: { alignSelf: 'center' },
});
