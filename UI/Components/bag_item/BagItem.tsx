import { Image, ImageSourcePropType, View } from 'react-native';
import styles from './style/index';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import AppText from '@components/basic/app_text';
import SimpleCountSnipper from '@components/simple_count_snipper';
import { useState } from 'react';
import BagOption from '@components/bag_option';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';

interface BagItemProps {
  image: ImageSourcePropType;
  options: string[];
  name: string;
  quantity: number;
  onPlus: () => void;
  onMinus: () => void;
  onRemove: () => void;
}
export default function BagItem({
  image,
  options,
  name,
  quantity,
  onPlus,
  onMinus,
  onRemove,
}: BagItemProps) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        childrenContainerStyle={styles.BagItemContent}
        containerStyle={styles.SwipeableView}
        renderRightActions={() => (
          <AppButton
            onPress={onRemove}
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: Colors.hot_red,
              paddingHorizontal: 15,
              marginLeft: 10,
            }}
            icon={
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={42}
                color={Colors.hot_red}
              />
            }
          />
        )}
      >
        <View style={styles.infoContainer}>
          <AppText text={name} style={styles.name} />
          <View style={styles.bagOptionsWrapper}>
            {options.map((option, index) => (
              <BagOption key={index} text={option} />
            ))}
          </View>

          <SimpleCountSnipper
            value={quantity}
            onMinus={onMinus}
            onPlus={onPlus}
          />
        </View>
        <Image source={image} resizeMode="center" style={styles.image} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}
