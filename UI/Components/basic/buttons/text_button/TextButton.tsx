import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import styles from './style/index';
import { ReactNode } from 'react';

//  const window = Dimensions.get("window");
//  const screen = Dimensions.get("screen");
export interface AppButtonProps {
  text?: string;
  onPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  icon?: ReactNode;
  itemsDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  padding?: number;
  borderRadius?: number;
  textStyle?: TextStyle;
  children?: ReactNode;
}
const AppButton = ({
  text,
  onPress,
  backgroundColor,
  style,
  icon,
  itemsDirection = 'row',
  padding = 10,
  borderRadius = 15,
  children,
  textStyle,
}: AppButtonProps) => {
  //  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,

          flexDirection: itemsDirection,
          padding,
          borderRadius,
        },
        style,
      ]}
      onPress={onPress}
    >
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      {icon}
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;
