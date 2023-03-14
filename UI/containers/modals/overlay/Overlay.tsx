import {
  View,
  Modal,
  TouchableWithoutFeedback,
  ModalProps,
  Animated,
  PanResponder,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style/index';
import { useOverlayStore } from '@stores/overlayStore';
import { useRef, useState } from 'react';

interface OverlayProps {
  modalProps?: ModalProps;
}
export default function Overlay({ modalProps }: OverlayProps) {
  const { visible, close, children, options } = useOverlayStore();

  const position = useRef(new Animated.ValueXY()).current;
  const [isDrag, setIsDrag] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0) {
          setIsDrag(true);
          position.setValue({ x: 0, y: gestureState.dy });
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 50) {
          setIsDrag(false);
          close();
        } else {
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration: 2000,
            useNativeDriver: false,
          }).start();
          console.log('still');
        }
      },
    }),
  ).current;

  return (
    <>
      <Modal
        transparent={true}
        visible={visible}
        animationType={options?.modalProps?.animationType ?? 'slide'}
        onRequestClose={close}
        {...modalProps}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.modalContainer}>
            <Animated.View
              style={[
                styles.modalView,
                {
                  ...options?.modalStyle,
                  transform: isDrag ? position.getTranslateTransform() : [],
                },
              ]}
              {...panResponder.panHandlers}
            >
              <KeyboardAvoidingView behavior="height" enabled>
                {children}
              </KeyboardAvoidingView>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {visible && (
        <TouchableWithoutFeedback onPress={close}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
