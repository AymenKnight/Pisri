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
  const { visible, close, children, options } = useOverlayStore();
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
            <TouchableOpacity
              activeOpacity={1}
              onPress={(event) => {
                event.stopPropagation();
              }}
            >
              <View style={{ ...options?.modalStyle }}>{children}</View>
            </TouchableOpacity>
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
