import Colors from '@components/config/Colors';
import { ReactNode } from 'react';
import { ViewStyle, ModalProps } from 'react-native';
import { create } from 'zustand';

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
    options?: ModalOptions,
  ) => { open: () => void; close: () => void };
  children?: React.ReactNode;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  options: {
    modalProps: {
      animationType: 'slide',
    },
    modalStyle: {
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
      paddingTop: 30,
    },
  },
  visible: false,
  close: () => set(() => ({ visible: false })),
  modal: (children, options) => {
    set((state) => ({ children, options: { ...state.options, ...options } }));
    return {
      open: () => set(() => ({ visible: true })),
      close: () => set(() => ({ visible: false })),
    };
  },
}));
