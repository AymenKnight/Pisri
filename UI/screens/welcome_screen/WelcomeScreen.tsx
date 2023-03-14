import { View, ImageBackground } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import Colors from '@components/config/Colors';
import sign_background from '@toPng/sign_background.png';
import WelcomeLogo from '@toSvg/welcome_logo.svg';
import { useOverlayStore } from '@stores/overlayStore';
import AuthSwitcher from '@containers/modals/auth_switcher';

interface WelcomeScreenProps {}
export default function WelcomeScreen({}: WelcomeScreenProps) {
  const { modal, close } = useOverlayStore();
  return (
    <View style={styles.WelcomeScreen}>
      <ImageBackground source={sign_background} style={styles.ImageBackground}>
        <WelcomeLogo style={styles.logo} />
        <View style={styles.controlsContainer}>
          <AppButton
            text="Sign Up "
            backgroundColor={Colors.primary}
            onPress={() => {
              modal(<AuthSwitcher authType="signUp" />).open();
            }}
          />
          <AppButton
            text="Sign In "
            backgroundColor={Colors.secondary}
            onPress={() => {
              modal(<AuthSwitcher authType="signIn" />).open();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
