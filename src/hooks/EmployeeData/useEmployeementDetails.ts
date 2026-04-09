import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useEmployeeDetails = (
    page: number,
    size: number,
    sortBy?: string,
    sortDir?: "asc" | "desc"
) => {
    return useQuery({
        queryKey: ["employeeDetails", page, size, sortBy, sortDir],
        queryFn: async () => {
            const params: Record<string, string | number> = {
                page,
                size,
            };

            if (sortBy && sortDir) {
                params.sortBy = sortBy;
                params.sortDir = sortDir;
            }

            const response = await api.get(
                "/api/employees",
                { params }
            );

            return response.data;
        }
    });
};