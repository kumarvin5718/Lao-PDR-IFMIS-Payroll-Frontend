import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useProvince = (enabled = false) =>
  useQuery({
    queryKey: ["province"],
    queryFn: () => api.get("/api/master/provinces").then((res) => res.data),
    enabled,
    retry: false,
  });
