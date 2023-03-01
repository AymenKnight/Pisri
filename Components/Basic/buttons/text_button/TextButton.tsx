import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './style/index';

//  const window = Dimensions.get("window");
//  const screen = Dimensions.get("screen");
interface AppButtonProps {
  text?: string;
  onPress?: () => void;
  style?: ViewStyle;

  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: number;
  height?: number;
}
const AppButton = ({
  text,
  onPress,
  fontSize = 18,
  color = 'white',
  backgroundColor,
  width,
  height,
  style,
}: AppButtonProps) => {
  //  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor, width: width, height: height },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize: fontSize,
            color: color,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
