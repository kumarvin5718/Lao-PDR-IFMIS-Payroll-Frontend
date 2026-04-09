import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useEducationLevel = (enabled = false) =>
  useQuery({
    queryKey: ["educationLevel"],
    queryFn: () => api.get("/api/master/education-levels").then((res) => res.data),
    enabled,
    retry: false,
  });

export type EmployeeCreate ={

}

  
export const useCreateLevel3 = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: EmployeeCreate[]) => {
      const response = await api.post(
        "/api/employees",
        data
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["EmployeeData"],
      });
    }
  });

};