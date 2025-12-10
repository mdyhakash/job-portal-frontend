import { create } from "zustand";

export const useJobStore = create((set) => ({
  allJobs: [],
  allAdminJobs: [],
  singleJob: null,
  allAppliedJobs: [],

  //filter and search
  filters: {
    industry: "",
    location: "",
    jobType: "",
    experienceLevel: null,
    salaryRange: null,
  },
  searchQuery: "",

  setAllJobs: (jobs) => set({ allJobs: jobs }),
  setAllAdminJobs: (adminJobs) => set({ allAdminJobs: adminJobs }),
  setSingleJob: (job) => set({ singleJob: job }),
  setAllAppliedJobs: (appliedJobs) => set({ allAppliedJobs: appliedJobs }),

  //filters and search
  setFilter: (field, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [field]: value,
      },
    })),
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Reset all filters and search
  resetFilters: () =>
    set({
      filters: {
        industry: "",
        location: "",
        jobType: "",
        experienceLevel: "",
        salaryRange: null,
      },
      searchQuery: "",
    }),
}));

export default useJobStore;
