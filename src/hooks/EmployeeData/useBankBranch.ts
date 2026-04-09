import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useBankBranch = (bankId?: string, enabled = false) =>
  useQuery({
    queryKey: ["bankBranch", bankId],
    queryFn: async () => {
      if (!bankId) {
        return [];
      }
      const response = await api.get(`/api/master/banks/${bankId}/branches`);
      return response.data;
    },
    enabled: enabled && !!bankId,
    retry: false,
  });
