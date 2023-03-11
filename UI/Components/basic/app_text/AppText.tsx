import { Text, TextStyle } from 'react-native';
import { useCallback } from 'react';
import {
  useFonts,
  PublicSans_800ExtraBold,
  PublicSans_300Light,
  PublicSans_200ExtraLight,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_900Black,
} from '@expo-google-fonts/public-sans';
import { defaultStyle } from '@components/config/styles';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
interface AppTextProps {
  style?: TextStyle;
  text: string | number;
  other?: any;
}
export default function AppText({ style, text, ...other }: AppTextProps) {
  const [fontsLoaded] = useFonts({
    PublicSans_800ExtraBold,
    PublicSans_300Light,
    PublicSans_200ExtraLight,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_900Black,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      {...other}
      style={[defaultStyle.text, style]}
      onLayout={onLayoutRootView}
    >
      {text}
    </Text>
  );
}
