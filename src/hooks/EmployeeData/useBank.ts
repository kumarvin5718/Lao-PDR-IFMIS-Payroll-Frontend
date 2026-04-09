import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useBank = (enabled = false) =>
  useQuery({
    queryKey: ["bank"],
    queryFn: async () => {
      const response = await api.get("/api/master/banks");
      return response.data;
    },
    enabled,
    retry: false,
  });




  