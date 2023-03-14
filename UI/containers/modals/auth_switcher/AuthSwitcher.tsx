import { View } from 'react-native';
import styles from './style/index';
import { useState } from 'react';
import SignInModal from '../sign_in_modal';
import SignUpModal from '../sign_up_modal';

interface AuthSwitcherProps {
  authType?: 'signIn' | 'signUp';
}
export default function AuthSwitcher({
  authType = 'signIn',
}: AuthSwitcherProps) {
  const [signType, setSignType] = useState<'signIn' | 'signUp'>(authType);

  const switchSignType = () => {
    setSignType(signType === 'signIn' ? 'signUp' : 'signIn');
  };

  return (
    <View style={styles.AuthSwitcher}>
      {signType == 'signIn' ? (
        <SignInModal handleToggle={switchSignType} />
      ) : (
        <SignUpModal handleToggle={switchSignType} />
      )}
    </View>
  );
}
