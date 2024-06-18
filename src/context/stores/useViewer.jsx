import { create } from "zustand";

/* 
  Create a zustand store for the viewer to communicate between the App and the UI.
*/

export const useViewer = create((set) => ({
  QUALITY: "low",
  LOCK: false,
  COMMENT: "This guy is awesome!",
  BLUR_SIZE: 5,
  CLEAR_COMMENT: null,
  CLEAR_BLUR: null,
  CLEAR_LAST_BLUR: null,
  CLEAR_LAST_COMMENT: null,

  setQUALITY: (QUALITY) => set({ QUALITY }),
  setLOCK: (LOCK) => set({ LOCK }),
  setCOMMENT: (COMMENT) => set({ COMMENT }),
  setBLUR_SIZE: (BLUR_SIZE) => set({ BLUR_SIZE }),
  setCLEAR_COMMENT: (fn) => set({ CLEAR_COMMENT: fn }),
  setCLEAR_BLUR: (fn) => set({ CLEAR_BLUR: fn }),
  setCLEAR_LAST_BLUR: (fn) => set({ CLEAR_LAST_BLUR: fn }),
  setCLEAR_LAST_COMMENT: (fn) => set({ CLEAR_LAST_COMMENT: fn }),
}));
