import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useCounter {
  counter: number;
  addToCounter: () => void;
  resetCounter: () => void;
  subtractToCounter: () => void;
}

export const useCounter = create(
  persist<useCounter>(
    (set, get) => ({
      counter: 0,
      addToCounter: () => {
        set({ counter: get().counter + 1 });
      },
      subtractToCounter: () => {
        set({ counter: get().counter - 1 });
      },
      resetCounter: () => set({ counter: 0 }),
    }),
    {
      name: "counter",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
