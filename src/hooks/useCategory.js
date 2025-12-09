import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api.get("/job-categories/getCategories");
      return res.data.categories;
    },
  });
};
