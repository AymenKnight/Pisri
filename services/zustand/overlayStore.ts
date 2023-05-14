import Colors from '@components/config/Colors';
import { ReactNode } from 'react';
import { ViewStyle, ModalProps, Dimensions } from 'react-native';
import { create } from 'zustand';

const screenHeight = Dimensions.get('window').height;
interface ModalOptions {
  modalProps?: ModalProps;
  modalStyle?: ViewStyle;
}
interface OverlayState {
  visible: boolean;
  options: ModalOptions;
  close: () => void;
  modal: (
    children: ReactNode,
    header?: ReactNode,
    options?: ModalOptions,
  ) => { open: () => void; close: () => void };
  children?: React.ReactNode;
  header?: React.ReactNode;
}
const defaultModalStyle: ViewStyle = {
  backgroundColor: 'white',
  borderTopLeftRadius: 35,
  borderTopRightRadius: 35,
  width: '100%',
  borderColor: Colors.light,
  borderWidth: 2.5,
  borderStyle: 'solid',
  position: 'absolute',
  bottom: 0,
  overflow: 'hidden',
  padding: 20,
  maxHeight: screenHeight * 0.9,
};
const defaultModalProps: ModalProps = {
  animationType: 'slide',
};

export const useOverlayStore = create<OverlayState>((set) => ({
  options: {
    modalProps: defaultModalProps,
    modalStyle: defaultModalStyle,
  },
  visible: false,
  close: () =>
    set(() => ({
      visible: false,
      options: {
        modalProps: defaultModalProps,
        modalStyle: defaultModalStyle,
      },
    })),
  modal: (children, header, options) => {
    set((state) => ({
      children,
      header,
      options: { ...state.options, ...options },
    }));
    return {
      open: () => set(() => ({ visible: true })),
      close: () => set(() => ({ visible: false })),
    };
  },
}));
