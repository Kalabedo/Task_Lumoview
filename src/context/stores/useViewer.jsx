import { create } from "zustand";

export const useViewer = create((set) => ({
  QUALITY: "low",
  LOCK: false,

  setQUALITY: (QUALITY) => set({ QUALITY }),
  setLOCK: (LOCK) => set({ LOCK }),
}));
