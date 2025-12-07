import { create } from "zustand";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  //error: null,

  setLoading: (value) => set({ loading: value }),

  setUser: (user) => set({ user }),

  //setError: (error) => set({ error }),

  login: async (input) => {
    try {
      set({ loading: true });

      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        set({ user: res.data.user, loading: false });
        return res.data;
      }
    } catch (err) {
      set({ loading: false });
      console.log(err);
    }
  },

  register: async (input) => {
    try {
      set({ loading: true });
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);
      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      set({ loading: false });

      if (res.data.success) {
        return res.data;
      }
    } catch (err) {
      set({ loading: false });
      console.log(err);
      toast.error("Registration failed");
    }
  },
}));
