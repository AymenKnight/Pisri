import { create } from 'zustand';

interface User {
  id: string;
  displayName: string;
  email: string;
}
interface AuthState {
  user: User | null;
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setIsFetching: (isFetching: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isFetching: false,
  error: null,
  setUser: (user: User | null) =>
    set({ user, isLoading: false, error: null, isFetching: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setIsFetching: (isFetching: boolean) => set({ isFetching }),
}));
