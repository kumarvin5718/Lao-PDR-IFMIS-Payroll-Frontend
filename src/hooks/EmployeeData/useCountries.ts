import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useCountries = (enabled = false) =>
  useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await api.get("/api/master/countries");
      return response.data;
    },
    enabled,
    retry: false,
  });
