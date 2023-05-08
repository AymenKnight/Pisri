import Colors from '@components/config/Colors';
import Overlay from '@containers/modals/overlay';
import AuthNavigator from '@navigation/auth_navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: Colors.white,
          border: Colors.borders,
          text: Colors.black,
          primary: Colors.primary,
          notification: Colors.coldBlue,
          card: Colors.white,
        },
      }}
    >
      <AuthNavigator />
      <Overlay />
    </NavigationContainer>
  );
}
// export { default } from './storybook';
