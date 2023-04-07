import { View } from 'react-native';
import styles from './style/index';
import WelcomeLogo from '@toSvg/welcome_logo.svg';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

interface TopNavigationProps {
  onBack?: () => void;
}
export default function TopNavigation({ onBack }: TopNavigationProps) {
  return (
    <View style={styles.TopNavigation}>
      {onBack ? (
        <AppButton
          icon={
            <MaterialIcons name="keyboard-arrow-left" size={33} color="white" />
          }
          onPress={() => {}}
        />
      ) : (
        <AppButton
          padding={0}
          icon={<Entypo name="menu" size={40} color="black" />}
          onPress={() => {}}
        />
      )}
      <WelcomeLogo width={120} />
      <AppButton
        icon={<MaterialIcons name="person-outline" size={30} color="black" />}
        onPress={() => {}}
        style={styles.profile}
      />
    </View>
  );
}
