import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useDepartment = (enabled = false) =>
  useQuery({
    queryKey: ["department"],
    queryFn: () => api.get("/api/master/departments").then((res) => res.data),
    enabled,
    retry: false,
  });
