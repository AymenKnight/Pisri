import {
  View,
  Dimensions,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './style/index';
import { useCallback, ReactNode, useState, useMemo } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, PublicSans_500Medium } from '@expo-google-fonts/public-sans';
import Colors from '@components/config/Colors';
import { defaultStyle } from '@components/config/styles';
import iconLib from '@components/config/iconLib';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '@components/basic/app_text';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

type ExpoIcons = keyof typeof iconLib;
interface ExpoIconsProps {
  expoIconName: string;
  expoIconLibrary: ExpoIcons;
  size?: number;
  onPress?: () => void;
}

interface AppTextInputProps {
  svg?: ReactNode;
  expoIcon?: ExpoIconsProps;
  width?: number;
  inputProps?: Omit<TextInputProps, 'style'>;
  inputStyle?: TextStyle;
  itemsDirection?: 'row' | 'row-reverse';
  label?: string;
}
export default function AppTextInput({
  svg,
  width,
  inputProps,
  inputStyle,
  itemsDirection = 'row',
  expoIcon,
  label,
}: AppTextInputProps) {
  const [focus, setFocus] = useState(false);

  const IconComp = useMemo(() => {
    switch (expoIcon?.expoIconLibrary) {
      case 'Feather':
        return Feather;

      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      default:
        return undefined;
    }
  }, [expoIcon?.expoIconLibrary]);
  const RenderedIcon =
    IconComp && expoIcon ? (
      <IconComp
        name={expoIcon.expoIconName as any}
        size={expoIcon.size ?? 20}
        color={focus ? Colors.primary : Colors.gray}
        style={{
          paddingRight: itemsDirection == 'row-reverse' ? 5 : 0,
          paddingLeft: itemsDirection == 'row-reverse' ? 0 : 5,
        }}
        onPress={expoIcon.onPress}
      />
    ) : null;

  const [fontsLoaded] = useFonts({
    PublicSans_500Medium,
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
    <View style={styles.wrapper}>
      {label && (
        <AppText
          style={{
            ...styles.labelStyle,
            color: focus ? Colors.primary : Colors.Unfocused_Blue,
          }}
          text={label}
        />
      )}
      <View
        onLayout={onLayoutRootView}
        style={[
          styles.AppTextInput,
          {
            flexDirection: itemsDirection,
            width: width,
            borderColor: focus ? Colors.primary : Colors.gray,
          },
        ]}
      >
        {svg && <View style={styles.icon}>{svg}</View>}
        {RenderedIcon}
        <TextInput
          cursorColor={Colors.primary}
          placeholderTextColor={Colors.medium}
          onFocus={(e) => {
            setFocus(true);
          }}
          onEndEditing={() => setFocus(false)}
          style={[defaultStyle.text, styles.TextInput, inputStyle]}
          {...inputProps}
        />
      </View>
    </View>
  );
}
