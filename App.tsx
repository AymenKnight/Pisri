import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@navigation/auth_navigator';
import Overlay from '@containers/modals/overlay';

export default function App() {
  return (
    <NavigationContainer
    // theme={{
    //   dark: false,
    //   colors: {
    //     background: signInVisible ? Colors.black : Colors.white,
    //     border: Colors.borders,
    //     text: Colors.black,
    //     primary: Colors.primary,
    //     notification: Colors.coldBlue,
    //     card: Colors.white,
    //   },
    // }}
    >
      <AuthNavigator />
      <Overlay />
    </NavigationContainer>
  );
}
// export { default } from './storybook';
