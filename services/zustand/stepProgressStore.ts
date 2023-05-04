import { create } from 'zustand';

interface StepProgressState {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isScroll: boolean;
  setIsScroll: () => void;
}

export const useStepProgressStore = create<StepProgressState>((set) => ({
  currentStep: 0,
  isScroll: false,
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
  setIsScroll: () => set((s) => ({ isScroll: !s.isScroll })),
}));
