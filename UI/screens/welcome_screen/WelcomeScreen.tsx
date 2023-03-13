import { View, ImageBackground } from 'react-native';
import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import Colors from '@components/config/Colors';
import sign_background from '@toPng/sign_background.png';
import WelcomeLogo from '@toSvg/welcome_logo.svg';
import { useOverlayStore } from '@stores/overlayStore';
import SignInModal from '@containers/modals/sign_in_modal';
import SignUpModal from '@containers/modals/sign_up_modal';

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
              modal(<SignUpModal />).open();
            }}
          />
          <AppButton
            text="Sign In "
            backgroundColor={Colors.secondary}
            onPress={() => {
              modal(<SignInModal />).open();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
