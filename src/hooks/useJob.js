import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios";
import { useJobStore } from "@/store/jobStore";

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await api.get("/job/get");
      return res.data.jobs;
    },
  });
};

export const useSingleJob = (jobId) => {
  const setSingleJob = useJobStore((state) => state.setSingleJob);
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: async () => {
      const res = await api.get(`/job/${jobId}`);
      return res.data.job;
    },
    onSuccess: (data) => {
      setSingleJob(data);
    }, // Only run the query if jobId is provided
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api.get("/job-categories/getCategories");
      return res.data.categories;
    },
  });
};
