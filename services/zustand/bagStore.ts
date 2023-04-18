import { create } from 'zustand';

interface BagItem {
  id: string;
  name: string;
  brand: string;
  variant: {
    name: string;
    volume: string;
    price: {
      amount: number;
      currency: string;
    };
  };
  quantity: number;
  costumeDetail: string;
}
interface BagState {
  bagItems: BagItem[];
  addItem: (item: BagItem) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
  addQuantity: (id: string) => void;
  removeQuantity: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  updateItemByIndex: (index: number, item: BagItem) => void;
}

export const useBagStore = create<BagState>((set) => ({
  bagItems: [],
  addItem: (item: BagItem) =>
    set((state) => {
      return { bagItems: [...state.bagItems, item] };
    }),
  removeItem: (id: string) =>
    set((state) => ({
      bagItems: state.bagItems.filter((item) => item.id !== id),
    })),
  clearBag: () => set((state) => ({ bagItems: [] })),
  addQuantity: (id: string) =>
    set((state) => ({
      bagItems: state.bagItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    })),
  removeQuantity: (id: string) =>
    set((state) => ({
      bagItems: state.bagItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    })),
  setQuantity: (id: string, quantity: number) =>
    set((state) => ({
      bagItems: state.bagItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      }),
    })),
  updateItemByIndex: (index: number, item: BagItem) =>
    set((state) => ({
      bagItems: [
        ...state.bagItems.slice(0, index),
        item,
        ...state.bagItems.slice(index + 1),
      ],
    })),
}));
