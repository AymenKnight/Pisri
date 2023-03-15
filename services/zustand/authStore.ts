import { create } from 'zustand';

interface AuthState {
  user: firebase.User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: firebase.User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: (user: firebase.User | null) => set({ user }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
}));
