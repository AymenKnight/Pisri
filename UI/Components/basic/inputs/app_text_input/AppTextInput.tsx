import {
  View,
  Dimensions,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './style/index';
import { ReactNode, useState, useMemo } from 'react';
import Colors from '@components/config/Colors';
import { defaultStyle } from '@components/config/styles';
import iconLib from '@components/config/iconLib';
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import AppText from '@components/basic/app_text';

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
  width?: number | string;
  inputProps?: Omit<TextInputProps, 'style'>;
  inputStyle?: TextStyle;
  itemsDirection?: 'row' | 'row-reverse';
  label?: string;
  error?: string;
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
}
export default function AppTextInput({
  svg,
  width,
  inputProps,
  inputStyle,
  itemsDirection = 'row',
  expoIcon,
  label,
  error,
  alignSelf,
}: AppTextInputProps) {
  const [focus, setFocus] = useState(false);

  const IconComp = useMemo(() => {
    switch (expoIcon?.expoIconLibrary) {
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;

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

  return (
    <View style={styles.wrapper}>
      {label && (
        <AppText
          style={{
            ...styles.labelStyle,
            color: focus
              ? error
                ? Colors.hot_red
                : Colors.primary
              : Colors.gray,
          }}
          text={label}
        />
      )}
      <View
        style={[
          styles.AppTextInput,
          {
            flexDirection: itemsDirection,
            width: width,
            alignSelf: alignSelf,
            borderColor: focus
              ? error
                ? Colors.hot_red
                : Colors.primary
              : Colors.gray,
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
      {error && <AppText style={styles.errorStyle} text={error} />}
    </View>
  );
}
