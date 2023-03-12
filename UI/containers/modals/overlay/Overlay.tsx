import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ModalProps,
} from 'react-native';
import styles from './style/index';
import { useOverlayStore } from '@stores/overlayStore';

interface OverlayProps {
  modalProps?: ModalProps;
}
export default function Overlay({ modalProps }: OverlayProps) {
  const { visible, close, children } = useOverlayStore();
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={close}
        {...modalProps}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPressOut={close}
        >
          <View style={styles.modalContent}>{children}</View>
        </TouchableOpacity>
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
