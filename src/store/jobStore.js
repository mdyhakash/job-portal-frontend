import { create } from "zustand";

export const useSingleJobStore = create((set) => ({
  singleJob: null,
  setSingleJob: (job) => set({ singleJob: job }),
}));
