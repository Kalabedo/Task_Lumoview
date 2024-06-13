import { create } from "zustand";

export const useViewer = create((set) => ({
  QUALITY: "low",

  setQUALITY: (QUALITY) => set({ QUALITY }),
}));
