import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useMinistry = (enabled = false) =>
  useQuery({
    queryKey: ["ministry"],
    queryFn: async () => {
      const response = await api.get("/api/master/ministries");
      return response.data;
    },
    enabled,
    retry: false,
  });
