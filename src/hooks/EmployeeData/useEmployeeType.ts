import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useEmployeeType = (enabled = false) =>
  useQuery({
    queryKey: ["employeeType"],
    queryFn: () => api.get("/api/master/employment-types").then((res) => res.data),
    enabled,
    retry: false,
  });
