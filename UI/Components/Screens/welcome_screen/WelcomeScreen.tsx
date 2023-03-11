import { View, ImageBackground } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import Colors from '@components/config/Colors';
import sign_background from '@toPng/sign_background.png';
import WelcomeLogo from '@toSvg/welcome_logo.svg';
import { useAuthStore } from '@stores/authStore';

interface WelcomeScreenProps {}
export default function WelcomeScreen({}: WelcomeScreenProps) {
  const {
    signInVisible,
    signUpVisible,
    changeSignInVisible,
    changeSignUpVisible,
  } = useAuthStore();
  return (
    <>
      <View style={styles.WelcomeScreen}>
        <ImageBackground
          source={sign_background}
          style={styles.ImageBackground}
        >
          <WelcomeLogo style={styles.logo} />
          <View style={styles.controlsContainer}>
            <AppButton
              text="Sign Up "
              backgroundColor={Colors.primary}
              onPress={() => {
                changeSignUpVisible();
              }}
            />
            <AppButton
              text="Sign In "
              backgroundColor={Colors.secondary}
              onPress={() => {
                changeSignInVisible();
              }}
            />
          </View>
        </ImageBackground>
      </View>

      {/* <SignInForm
        visible={SignInVisible}
        setVisible={() => setSignInVisible(false)}
      />
      <SignUpForm
        visible={SignUpVisible}
        setVisible={() => setSignUpVisible(false)}
      /> */}
    </>
  );
}
