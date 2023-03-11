import { View, ImageBackground } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import Colors from '@components/config/Colors';
import sign_background from '@toPng/sign_background.png';
import WelcomeLogo from '@toSvg/welcome_logo.svg';

interface WelcomeScreenProps {}
export default function WelcomeScreen({}: WelcomeScreenProps) {
  return (
    <View style={styles.WelcomeScreen}>
      <ImageBackground source={sign_background} style={styles.ImageBackground}>
        <WelcomeLogo style={styles.logo} />
        <View style={styles.controlsContainer}>
          <AppButton
            text="Sign Up "
            backgroundColor={Colors.primary}

            // onPress={() => setSignUpVisible(true)}
          />
          <AppButton
            text="Sign In "
            backgroundColor={Colors.secondary}

            // onPress={() => setSignInVisible(true)}
          />
        </View>
      </ImageBackground>
    </View>
  );
  {
    /* <SignVisibleContext.Provider
          value={{
            SignInVisible: SignInVisible,
            setSignInVisible: setSignInVisible,
            SignUpVisible: SignUpVisible,
            setSignUpVisible: setSignUpVisible,
          }}
        >
          <SignInForm
            visible={SignInVisible}
            setVisible={() => setSignInVisible(false)}
          />
          <SignUpForm
            visible={SignUpVisible}
            setVisible={() => setSignUpVisible(false)}
          />
        </SignVisibleContext.Provider> */
  }
}
