import { create } from 'zustand';

interface AuthState {
  signInVisible: boolean;
  signUpVisible: boolean;
  changeSignInVisible: () => void;
  changeSignUpVisible: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  signInVisible: false,
  signUpVisible: false,
  changeSignInVisible: () =>
    set((state) => ({ signInVisible: !state.signInVisible })),
  changeSignUpVisible: () =>
    set((state) => ({ signUpVisible: !state.signUpVisible })),
}));
