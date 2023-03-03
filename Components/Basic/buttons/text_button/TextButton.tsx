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
  borderColor?: string;
  width?: number;
  height?: number;
  icon?: ReactNode;
  itemsDirection?: 'row' | 'row-reverse';
  padding?: number;
  borderRadius?: number;
  textStyle?: TextStyle;
}
const AppButton = ({
  text,
  onPress,

  backgroundColor,
  width,
  height,
  style,
  icon,
  itemsDirection = 'row',
  padding = 10,
  borderRadius = 15,

  textStyle,
}: AppButtonProps) => {
  //  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
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
    </TouchableOpacity>
  );
};

export default AppButton;
