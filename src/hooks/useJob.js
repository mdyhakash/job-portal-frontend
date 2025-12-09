import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios";
import { useSingleJobStore } from "@/store/jobStore";


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
  const setSingleJob = useSingleJobStore((state) => state.setSingleJob);
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
