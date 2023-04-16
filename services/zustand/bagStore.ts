import { create } from 'zustand';

interface BagItem {
  id: string;
  name: string;
  brand: string;
  variant: string;
  quantity: number;
  costumeDetail: string;
}
interface BagState {
  bagItems: BagItem[];
  addItem: (item: BagItem) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
  addQuantity: (id: string, quantity: number) => void;
  removeQuantity: (id: string, quantity: number) => void;
}

export const useBagStore = create<BagState>((set) => ({
  bagItems: [],
  addItem: (item: BagItem) =>
    set((state) => ({ bagItems: [...state.bagItems, item] })),
  removeItem: (id: string) =>
    set((state) => ({
      bagItems: state.bagItems.filter((item) => item.id !== id),
    })),
  clearBag: () => set((state) => ({ bagItems: [] })),
  addQuantity: (id: string, quantity: number) =>
    set((state) => ({
      bagItems: state.bagItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      }),
    })),
  removeQuantity: (id: string, quantity: number) =>
    set((state) => ({
      bagItems: state.bagItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - quantity };
        }
        return item;
      }),
    })),
}));
