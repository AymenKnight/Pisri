import { create } from 'zustand';

interface StepProgressState {
  currentStep: number;
  currentX: number;
  setCurrentStep: (step: number) => void;
  setCurrentX: (x: number) => void;
}

export const useStepProgressStore = create<StepProgressState>((set) => ({
  currentStep: 0,
  currentX: 0,
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
  setCurrentX: (x) => set(() => ({ currentX: x })),
}));
