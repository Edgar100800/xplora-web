import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useStoreFormNavigationBar {
  nextAvailable: boolean;
  setNextAvailable: (value: boolean) => void;
  
  customFunction: (() => void) | null;
  setNextButtomCallback: (callback: () => void) => void;
  handleNextButtomChange: () => void;
}

export const useStoreFormNavigationBar = create(
  persist<useStoreFormNavigationBar>(
    (set, get) => ({
      nextAvailable: true,
      customFunction: null,

      setNextButtomCallback: (callback: () => void) => {
        set({ customFunction: callback });
      },

      handleNextButtomChange: () => {
        const { customFunction } = get();
        if (customFunction) {
          customFunction();
        }
      },

      setNextAvailable: (value: boolean) => {
        set({ nextAvailable: value });
      },

    }),
    {
      name: "store-form-navigation-bar",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
