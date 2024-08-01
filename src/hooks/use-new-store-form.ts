import { create } from "zustand";
import { StoreForm } from "@/lib/definitions";
import { persist, createJSONStorage } from "zustand/middleware";

interface useCounterStoreForm {
  store: StoreForm ;
  counter: number;
  addToCounter: () => void;
  resetCounter: () => void;
  subtractToCounter: () => void;
  updateStore: (newStore: any) => void;
}

export const useCounterStoreForm = create(
  persist<useCounterStoreForm>(
    (set, get) => ({
      counter: 0,
      store: {
        category: -1,
        name: "",
        address: {
          street: "",
          city: "",
          state: "",
          zip: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        contact: {
          phone: "",
          email: "",
        },
        business_hours: {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        },
      },

      addToCounter: () => {
        set({ counter: get().counter + 1 });
      },
      
      subtractToCounter: () => {
        set({ counter: get().counter - 1 });
      },

      resetCounter: () => set({ counter: 0 }),

      updateStore: (newStore : any) => {
        set((state) => ({
          store: {
            ...state.store,
            ...newStore,
            address: {
              ...state.store.address,
              ...newStore.address,
            },
            contact: {
              ...state.store.contact,
              ...newStore.contact,
            },
            business_hours: {
              ...state.store.business_hours,
              ...newStore.business_hours,
            },
          },
        }));
      },
    }),

    {
      name: "counterStoreForm",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
