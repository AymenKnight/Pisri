import styles from './style/index';
import AppButton from '@components/basic/buttons/text_button/TextButton';

interface CategoriesItemProps {
  name: string;
  selected: boolean;
  onPress?: () => void;
}
export default function CategoriesItem({
  name,
  selected,
  onPress,
}: CategoriesItemProps) {
  return (
    <AppButton
      onPress={onPress}
      text={name}
      style={selected ? styles.selectedButton : styles.unselectedButton}
      textStyle={selected ? styles.selectedText : styles.unselectedText}
    />
  );
}
