import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useEmployeeDetails = (
    page: number,
    size: number,
) => {
    return useQuery({
        queryKey: ["employeeDetails", page, size],
        queryFn: async () => {
            const params: Record<string, string | number> = {
                page,
                size,
            };

          
            const response = await api.get(
                "/api/employees",
                { params }
            );
       console.log("API Response:", response.data);
            return response.data;
        }
    });
};