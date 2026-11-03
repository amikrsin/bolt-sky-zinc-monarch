import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Sankalp = {
  name: string;
  gotra: string;
  city: string;
  date: string;
};

type ReaderState = {
  checks: Record<string, boolean>;
  toggle: (id: string) => void;
  clearChecks: () => void;
  sankalp: Sankalp;
  setSankalp: (patch: Partial<Sankalp>) => void;
  scale: "comfortable" | "large";
  toggleScale: () => void;
};

const emptySankalp: Sankalp = { name: "", gotra: "", city: "", date: "" };

export const useReader = create<ReaderState>()(
  persist(
    (set) => ({
      checks: {},
      toggle: (id) =>
        set((state) => ({
          checks: { ...state.checks, [id]: !state.checks[id] },
        })),
      clearChecks: () => set({ checks: {} }),
      sankalp: emptySankalp,
      setSankalp: (patch) =>
        set((state) => ({ sankalp: { ...state.sankalp, ...patch } })),
      scale: "comfortable",
      toggleScale: () =>
        set((state) => ({
          scale: state.scale === "comfortable" ? "large" : "comfortable",
        })),
    }),
    { name: "diwali-puja-reader", skipHydration: true },
  ),
);
