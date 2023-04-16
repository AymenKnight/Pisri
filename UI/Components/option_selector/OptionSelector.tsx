import { ScrollView, View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import CategoriesItem from '@components/categories_item';

interface OptionSelectorProps {
  selectedIndex: number;
  label?: string;
  options?: string[];
  onselect: (index: number) => void;
}
export default function OptionSelector({
  label,
  selectedIndex,
  options,
  onselect,
}: OptionSelectorProps) {
  return (
    <View style={styles.OptionSelector}>
      {label && (
        <AppText
          style={{
            ...styles.labelStyle,
          }}
          text={label}
        />
      )}
      <ScrollView
        pagingEnabled={false}
        style={styles.pickerContainer}
        horizontal={true}
        centerContent={true}
        contentContainerStyle={[styles.optionsContainer]}
      >
        {options?.map((name, index) => (
          <CategoriesItem
            name={name}
            key={index}
            selected={selectedIndex == index}
            onPress={() => onselect(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
