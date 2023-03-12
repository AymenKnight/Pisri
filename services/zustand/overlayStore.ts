import { ReactNode } from 'react';
import { create } from 'zustand';

interface OverlayState {
  visible: boolean;
  close: () => void;
  modal: (children: ReactNode) => { open: () => void; close: () => void };
  children?: React.ReactNode;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  visible: false,
  close: () => set(() => ({ visible: false })),
  modal: (children) => {
    set(() => ({ children }));
    return {
      open: () => set(() => ({ visible: true })),
      close: () => set(() => ({ visible: false })),
    };
  },
}));
