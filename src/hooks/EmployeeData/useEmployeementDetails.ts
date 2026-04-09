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

export const useEmployeeDetailsBySearch = (
    page: number,
    size: number,
    searchParams: {
        keyword?: string;
        firstName?: string;
        lastName?: string;
        employeeCode?: string;
    }
) => {
    return useQuery({
        queryKey: ["employeeDetails", page, size, searchParams],
        queryFn: async () => {
            const params: Record<string, any> = {
                page,
                size,
                ...searchParams,
            };

            const response = await api.get("/api/employees/search", {
                params,
            });

            return response.data;
        },
        enabled: Object.values(searchParams).some((value) => value && value.trim() !== ""),});
};