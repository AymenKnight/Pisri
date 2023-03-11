import { useState } from 'react';
import AppTextInput from '../app_text_input';
import { TextInputProps, TextStyle } from 'react-native';

interface PasswordInputProps {
  inputProps?: Omit<TextInputProps, 'style'>;
  inputStyle?: TextStyle;
  itemsDirection?: 'row' | 'row-reverse';
  label?: string;
}
export default function PasswordInput({
  inputProps,
  inputStyle,
  itemsDirection = 'row-reverse',
  label,
}: PasswordInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <AppTextInput
      label={label}
      itemsDirection={itemsDirection}
      expoIcon={{
        expoIconLibrary: 'MaterialCommunityIcons',
        expoIconName: passwordVisible ? 'eye-off' : 'eye',
        size: 20,
        onPress: () => {
          setPasswordVisible(!passwordVisible);
        },
      }}
      inputProps={{ secureTextEntry: !passwordVisible, ...inputProps }}
      inputStyle={inputStyle}
    />
  );
}
